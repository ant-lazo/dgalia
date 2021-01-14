import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OpenDrawerService {

    public openDrawer: Subject<boolean> = new Subject();

    constructor() { }

    public open(): void {
        this.openDrawer.next(true);
    }

    public close(): void {
        this.openDrawer.next(false);
    }
}
