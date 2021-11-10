import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class OpenUsersService {

        public openUsers: Subject<boolean> = new Subject();
    
        constructor() { }
    
        public open(): void {
            this.openUsers.next(true);
        }
    
        public close(): void {
            this.openUsers.next(false);
        }
}
