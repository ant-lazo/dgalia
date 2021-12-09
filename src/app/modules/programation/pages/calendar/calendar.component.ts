import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, IterableDiffers, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { Calendar as FullCalendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import momentPlugin from '@fullcalendar/moment';
import rrulePlugin from '@fullcalendar/rrule';
import timeGridPlugin from '@fullcalendar/timegrid';
import { cloneDeep, omit, clone, isEqual } from 'lodash-es';
import moment from 'moment';
import { RRule } from 'rrule';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TreoMediaWatcherService } from '@treo/services/media-watcher';
import { Calendar, CalendarDrawerMode, CalendarEvent, CalendarEventEditMode, CalendarEventPanelMode, CalendarSettings } from '../../models/calendar.types';
import { CalendarService } from '../../services/calendar.service';
import esLocale from '@fullcalendar/core/locales/es';
import { CookingScheduleService } from '../../services/cooking-schedule.service';
import ProgramationCalendarComponentHelper from '../../helpers/programation-calendar-component.helper';
import { CookingSchedule } from '../../models/cooking-schedule.model';
import { CalendarShow } from '../../models/calendar-show.model';
import { title } from 'process';

@Component({
  selector: 'cooking-schedule-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit, AfterViewInit, OnDestroy{

  public calendars: Calendar[] = [];
  public calendarPlugins: any;
  public drawerMode: CalendarDrawerMode;
  public drawerOpened: boolean;
  public event: CalendarEvent;
  public eventEditMode: CalendarEventEditMode;
  public eventForm: FormGroup;
  public eventTimeFormat: any;
  //public events: CalendarEvent[];
  public events: any[];
  public panelMode: CalendarEventPanelMode;
  public settings: CalendarSettings;
  public view: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listYear';
  public views: any;
  public viewTitle: string;
  public spanishLocale: any;
  private helper: ProgramationCalendarComponentHelper;

  // Private
  private _eventPanelOverlayRef: OverlayRef;
  private _eventPanelTemplatePortal: TemplatePortal;
  private _fullCalendarApi: FullCalendar;
  private _unsubscribeAll: Subject<any>;

  @ViewChild('eventPanel')
  private _eventPanel: TemplateRef<any>;

  @ViewChild('fullCalendar')
  private _fullCalendar: FullCalendarComponent;

  @ViewChild('drawer')
  private _drawer: MatDrawer;
  
  public schelude: CookingSchedule[]

  public calendarShow: CalendarShow[]

  constructor(
    private _calendarService: CalendarService,
    private _changeDetectorRef: ChangeDetectorRef,
    @Inject(DOCUMENT) private _document: Document,
    private _formBuilder: FormBuilder,
    private _matDialog: MatDialog,
    private _overlay: Overlay,
    private _treoMediaWatcherService: TreoMediaWatcherService,
    private _viewContainerRef: ViewContainerRef,
    private _cookingSchedule: CookingScheduleService
  ) {
    this._unsubscribeAll = new Subject();
    this.calendarPlugins = [dayGridPlugin, interactionPlugin, listPlugin, momentPlugin, rrulePlugin, timeGridPlugin];
    this.drawerMode = 'side';
    this.drawerOpened = true;
    this.eventEditMode = 'single';
    this.events = [];
    this.panelMode = 'view';
    this.view = 'dayGridMonth';
    this.spanishLocale = esLocale;
    this.helper = new ProgramationCalendarComponentHelper();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Getter for event's recurrence status
   */
  get recurrenceStatus(): string {
    // Get the recurrence from event form
    const recurrence = this.eventForm.get('recurrence').value;

    // Return null, if there is no recurrence on the event
    if (!recurrence) {
      return null;
    }

    // Convert the recurrence rule to text
    let ruleText = RRule.fromString(recurrence).toText();
    ruleText = ruleText.charAt(0).toUpperCase() + ruleText.slice(1);

    // Return the rule text
    return ruleText;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Create the event form
    this.eventForm = this._formBuilder.group({
      id: [''],
      calendarId: [''],
      recurringEventId: [null],
      title: [''],
      description: [''],
      start: [null],
      end: [null],
      duration: [null],
      allDay: [true],
      recurrence: [null],
      range: [{}]
    });

    // Subscribe to 'range' field value changes
    this.eventForm.get('range').valueChanges.subscribe((value) => {

      if (!value) {
        return;
      }

      // Set the 'start' field value from the range
      this.eventForm.get('start').setValue(value.start, { emitEvent: false });

      // If this is a recurring event...
      if (this.eventForm.get('recurrence').value) {
        // Update the recurrence rules if needed
        // this._updateRecurrenceRule();

        // Set the duration field
        const duration = moment(value.end).diff(moment(value.start), 'minutes');
        this.eventForm.get('duration').setValue(duration, { emitEvent: false });

        // Update the end value
        this._updateEndValue();
      }
      // Otherwise...
      else {
        // Set the end field
        this.eventForm.get('end').setValue(value.end, { emitEvent: false });
      }
    });

    // Subscribe to 'recurrence' field changes
    this.eventForm.get('recurrence').valueChanges.subscribe((value) => {

      // If this is a recurring event...
      if (value) {
        // Update the end value
        this._updateEndValue();
      }
    });

    // Get events
    this.setCalendarEvents();


    // Get settings
    this._calendarService.settings$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((settings) => {


        // Store the settings
        this.settings = settings;

        // Set the FullCalendar event time format based on the time format setting
        this.eventTimeFormat = {
          hour: settings.timeFormat === '12' ? 'numeric' : '2-digit',
          hour12: settings.timeFormat === '12',
          minute: '2-digit',
          meridiem: settings.timeFormat === '12' ? 'short' : false
        };

        // Mark for check
        this._changeDetectorRef.markForCheck();
      });

    // Subscribe to media changes
    this._treoMediaWatcherService.onMediaChange$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(({ matchingAliases }) => {

        // Set the drawerMode and drawerOpened if the given breakpoint is active
        if (matchingAliases.includes('lt-md')) {
          this.drawerMode = 'over';
          this.drawerOpened = false;
        }
        else {
          this.drawerMode = 'side';
          this.drawerOpened = true;
        }

        // Mark for check
        this._changeDetectorRef.markForCheck();
      });

    // Build the view specific FullCalendar options
    this.views = {
      dayGridMonth: {
        eventLimit: 3,
        eventTimeFormat: this.eventTimeFormat,
        fixedWeekCount: false
      },
      timeGrid: {
        allDayText: '',
        columnHeaderFormat: {
          weekday: 'short',
          day: 'numeric',
          omitCommas: true
        },
        columnHeaderHtml: (date: any) => {
          return `<span class="fc-weekday">${moment(date).format('ddd')}</span>
                          <span class="fc-date">${moment(date).format('D')}</span>`;
        },
        slotDuration: '01:00:00',
        slotLabelFormat: this.eventTimeFormat
      },
      timeGridWeek: {},
      timeGridDay: {},
      listYear: {
        allDayText: 'All day',
        eventTimeFormat: this.eventTimeFormat,
        listDayFormat: false,
        listDayAltFormat: false
      }
    };

    //this.obtenerData();

  }

  /**
   * After view init
   */
  ngAfterViewInit(): void {
    // Get the full calendar API
    this._fullCalendarApi = this._fullCalendar.getApi();

    // Get the current view's title
    this.viewTitle = this._fullCalendarApi.view.title;

    // Get the view's current start and end dates, add/subtract
    // 60 days to create a ~150 days period to fetch the data for
    // const viewStart = moment(this._fullCalendarApi.view.currentStart).subtract(60, 'days');
    // const viewEnd = moment(this._fullCalendarApi.view.currentEnd).add(60, 'days');

  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------


  private _openEventPanel(calendarEvent: any): void {
    // Create the overlay
    this._eventPanelOverlayRef = this._overlay.create({
      panelClass: ['calendar-event-panel', 'panel-mode-view'],
      backdropClass: '',
      hasBackdrop: true,
      scrollStrategy: this._overlay.scrollStrategies.reposition(),
      positionStrategy: this._overlay.position()
        .flexibleConnectedTo(calendarEvent.el)
        .withFlexibleDimensions(false)
        .withPositions([
          {
            originX: 'end',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'top',
            offsetX: 8
          },
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'top',
            offsetX: -8
          },
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'bottom',
            offsetX: -8
          },
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'bottom',
            offsetX: 8
          }
        ])
    });

    // Create a portal from the template
    this._eventPanelTemplatePortal = new TemplatePortal(this._eventPanel, this._viewContainerRef);

    // On backdrop click...
    this._eventPanelOverlayRef.backdropClick().subscribe(() => {

      // Close the event panel
      this._closeEventPanel();
    });

    // Attach the portal to the overlay
    this._eventPanelOverlayRef.attach(this._eventPanelTemplatePortal);

    // Mark for check
    this._changeDetectorRef.markForCheck();
  }


  public _closeEventPanel(): void {
    // If template portal exists and attached...
    if (this._eventPanelTemplatePortal && this._eventPanelTemplatePortal.isAttached) {
      // Detach it
      this._eventPanelTemplatePortal.detach();
    }

    // If overlay exists and attached...
    if (this._eventPanelOverlayRef && this._eventPanelOverlayRef.hasAttached()) {
      // Detach it
      this._eventPanelOverlayRef.detach();
      this._eventPanelOverlayRef.dispose();
    }

    // Reset the panel and event edit modes
    this.panelMode = 'view';
    this.eventEditMode = 'single';

    // Mark for check
    this._changeDetectorRef.markForCheck();
  }



  /**
   * Update the end value based on the recurrence and duration
   *
   * @private
   */
  private _updateEndValue(): void {
    // Get the event recurrence
    const recurrence = this.eventForm.get('recurrence').value;

    // Return, if this is a non-recurring event
    if (!recurrence) {
      return;
    }

    // Parse the recurrence rule
    const parsedRules = {};
    recurrence.split(';').forEach((rule) => {

      // Split the rule
      const parsedRule = rule.split('=');

      // Add the rule to the parsed rules
      parsedRules[parsedRule[0]] = parsedRule[1];
    });

    // If there is an UNTIL rule...
    if (parsedRules['UNTIL']) {
      // Use that to set the end date
      this.eventForm.get('end').setValue(parsedRules['UNTIL']);

      // Return
      return;
    }

    // If there is a COUNT rule...
    if (parsedRules['COUNT']) {
      // Generate the RRule string
      const rrule = 'DTSTART=' + moment(this.eventForm.get('start').value).utc().format('YYYYMMDD[T]HHmmss[Z]') + '\nRRULE:' + recurrence;

      // Use RRule string to generate dates
      const dates = RRule.fromString(rrule).all();

      // Get the last date from dates array and set that as the end date
      this.eventForm.get('end').setValue(moment(dates[dates.length - 1]).toISOString());

      // Return
      return;
    }

    // If there are no UNTIL or COUNT, set the end date to a fixed value
    this.eventForm.get('end').setValue(moment().year(9999).endOf('year').toISOString());
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle Drawer
   */
  toggleDrawer(): void {
    // Toggle the drawer
    this._drawer.toggle();
  }



  getCalendar(id: any): Calendar {
    if (!id) {
      return;
    }

    return this.calendars.find((calendar) => calendar.id === id);
  }

  changeView(view: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listYear'): void {
    // Store the view
    this.view = view;

    // If the FullCalendar API is available...
    if (this._fullCalendarApi) {
      // Set the view
      this._fullCalendarApi.changeView(view);

      // Update the view title
      this.viewTitle = this._fullCalendarApi.view.title;
    }
  }


  previous(): void {
    // Go to previous stop
    this._fullCalendarApi.prev();

    // Update the view title
    this.viewTitle = this._fullCalendarApi.view.title;

    // Get the view's current start date
    const start = moment(this._fullCalendarApi.view.currentStart);

    // Prefetch past events
    // this._calendarService.prefetchPastEvents(start).subscribe();
  }


  today(): void {
    // Go to today
    this._fullCalendarApi.today();

    // Update the view title
    this.viewTitle = this._fullCalendarApi.view.title;
  }


  next(): void {
    // Go to next stop
    this._fullCalendarApi.next();

    // Update the view title
    this.viewTitle = this._fullCalendarApi.view.title;

    // Get the view's current end date
    const end = moment(this._fullCalendarApi.view.currentEnd);

    // Prefetch future events
    // this._calendarService.prefetchFutureEvents(end).subscribe();
  }



  onEventClick(calendarEvent): void {
    // Find the event with the clicked event's id
    const event: any = cloneDeep(this.events.find(item => item.id === calendarEvent.event.id));

    // Set the event
    this.event = event;

    // Prepare the end value
    let end;

    // If this is a recurring event...
    if (event.recuringEventId) {
      // Calculate the end value using the duration
      end = moment(event.start).add(event.duration, 'minutes').toISOString();
    }
    // Otherwise...
    else {
      // Set the end value from the end
      end = event.end;
    }

    // Set the range on the event
    event.range = {
      start: event.start,
      end
    };

    // Reset the form and fill the event
    this.eventForm.reset();
    this.eventForm.patchValue(event);

    // Open the event panel
    this._openEventPanel(calendarEvent);
  }

  onCalendarUpdated(_: any): void {
    this._fullCalendarApi.rerenderEvents();
  }



  onEventRender(calendarEvent: any): void {
    // Get event's calendar
    const calendar = this.calendars.find((item) => item.id === calendarEvent.event.extendedProps.calendarId);

    // Return, if the calendar doesn't exist...
    if (!calendar) {
      return;
    }

    // If current view is year list...
    if (this.view === 'listYear') {
      // Create a new 'fc-list-item-date' node
      const fcListItemDate1 = `<td class="fc-list-item-date">
                                          <span>
                                              <span>${moment(calendarEvent.event.start).format('D')}</span>
                                              <span>${moment(calendarEvent.event.start).format('MMM')}, ${moment(calendarEvent.event.start).format('ddd')}</span>
                                          </span>
                                      </td>`;

      // Insert the 'fc-list-item-date' into the calendar event element
      calendarEvent.el.insertAdjacentHTML('afterbegin', fcListItemDate1);

      // Set the color class of the event dot
      calendarEvent.el.getElementsByClassName('fc-event-dot')[0].classList.add(calendar.color);

      // Set the event's title to '(No title)' if event title is not available
      if (!calendarEvent.event.title) {
        calendarEvent.el.querySelector('.fc-list-item-title').innerText = '(No title)';
      }
    }
    // If current view is not month list...
    else {
      // Set the color class of the event
     

      // Set the event's title to '(No title)' if event title is not available
      if (!calendarEvent.event.title) {
        calendarEvent.el.querySelector('.fc-title').innerText = '(No title)';
      }
    }

    // Set the event's visibility
    calendarEvent.el.style.display = calendar.visible ? 'flex' : 'none';
  }

  /*private obtenerData(){
  this._cookingSchedule.getAll().subscribe( a =>{
    this.schelude =a,
    this.iterar();
  })
  }*/

  private setCalendarEvents() {
    const params = this.helper.getCurrentMonth();
    /*this._cookingSchedule.getByMonth(params.month, params.year)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(list => {
        const events = this.helper.getEnventsFromCookingSchedule(list);
        this.events = cloneDeep(events);
        this._changeDetectorRef.markForCheck();
        this.setCalendars(list);
      });*/

    this._cookingSchedule.getAll()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(list => {
        const events = this.helper.getEnventsFromCookingSchedule(list);
        this.events = cloneDeep(events);
        this._changeDetectorRef.markForCheck();
        this.setCalendars(list);
      });

    
      
      //this.obtenerData();

      /*for(const s of this.schelude){
      console.log("descripcion: ",s.description),
      console.log("startDate: ",s.startDate),
        this.events.push({
          title:"holaa",
          start: new Date (),
          end: new Date (),
          description: "holaaaaa"
        })
      }*/

       /*this.events.push( {
          title:"Evento1",
          start: new Date(),
          end: new Date( new Date().getTime() + 86400000),
          description:"Evento1"
        })

        this.events.push( {
          title:"Evento2",
          start: new Date( new Date().getTime() + 86400000),
          end: new Date( new Date().getTime() + (86400000 * 2)),
          description:"Evento2"
        })*/

      /*this.events=[
        {
          title:"Evento1",
          start: new Date(),
          end: new Date( new Date().getTime() + 86400000),
          description:"Evento1"
        },
        {
          title:"Evento2",
          start: new Date( new Date().getTime() + (86400000*2)),
          description:"Evento2"
        }
      ]*/
  }

  /*iterar():void{
    for(const s of this.schelude){
      console.log("descripcion: ",s.description),
      console.log("startDate: ",s.startDate),
      this.events.push({
          title:"holaa",
          start: new Date (),
          end: new Date (),
          description: "holaaaaa"
        })
    }
  }

  obtenerData(){
    this._cookingSchedule.getAll().subscribe( a =>{
      this.schelude =a
      //this.iterar();
    })
  }*/

  private setCalendars(list: CookingSchedule[]) {
    this.calendars = this.helper.getCalendarsFromCookingSchedule(list);
    this._changeDetectorRef.markForCheck();
  }

}
