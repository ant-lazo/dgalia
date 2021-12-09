import { CalendarEvent, Calendar } from '../models/calendar.types';
import { GetByMonthRequest } from "../models/get-by-month-request";
import moment from "moment";
import { CookingSchedule } from '../models/cooking-schedule.model';
import { appColors } from '../../../core/config/app.config';
import { calendarColors } from '../components/sidebar/calendar-colors';

export default class ProgramationCalendarComponentHelper {

    /**
     * getCurrentMonth
     */
    public getCurrentMonth(): GetByMonthRequest {
        return {
            month: `${new Date().getMonth() + 1}`,
            year: new Date().getFullYear().toString(),
        }
    }


    /**
     * getEnventsFromCookingSchedule
     */
    public getEnventsFromCookingSchedule(list: CookingSchedule[]): CalendarEvent[] {
        const newList: CalendarEvent[] = [];
         for (const item of list) {
             newList.push({
                 id: item.id.toString(),
                 calendarId: item.headquarter.id.toString(),
                 recurringEventId: item.id.toString(),
                 title: item.note,
                 description: item.description,
                 //start: moment(item.completeDate).toISOString(),
                 //end: moment().year(9999).endOf('year').toISOString(),
                 start: item.startDate,
                 end: item.endDate,
                 allDay: false,
                 recurrence: null,
                 isFirstInstance: false,
                 //classes: item.classes,
                 //courses: item.course,
                 classes: null,
                 courses: null,
                 term: item.term
             })
         }
        return newList;
    }


    public getCalendarsFromCookingSchedule(list: CookingSchedule[]): Calendar[] {
        const newCalendarList: Calendar[] = [];
        for (const item of list) {
            const founded = newCalendarList.find(calendar => calendar.id.toString() === item.headquarter.id.toString());
            if (!founded) {
                newCalendarList.push({
                    id: item.headquarter.id.toString(),
                    title: item.headquarter.name,
                    color: item.headquarter.color,
                    visible: true
                })
            }
        }
        return newCalendarList;
    }

    public getRandomColor(): string {
        const random = Math.floor(Math.random() * calendarColors.length);
        return calendarColors[random];
    }
}