import { CalendarEvent } from "../models/calendar.types";
import { GetByMonthRequest } from "../models/get-by-month-request";
import { CookingSchedule } from '../models/cooking-schedule.model';
import moment from "moment";

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
                calendarId: '1a470c8e-40ed-4c2d-b590-a4f1f6ead6cc',
                recurringEventId: item.id.toString(),
                title: item.note,
                description: item.description,
                start: moment(item.completeDate).toISOString(),
                end: moment().year(9999).endOf('year').toISOString(),
                allDay: false,
                recurrence: null,
                isFirstInstance: false
            })
        }
        console.log(newList);
        return newList;
    }
}