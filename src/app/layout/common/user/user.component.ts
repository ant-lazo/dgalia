import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'app/layout/common/user/user.types';
import { UserService } from 'app/layout/common/user/user.service';
import { OpenDrawerService } from 'app/core/services/open-drawer.service';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthenticatedUser } from 'app/core/models/authenticated-user.model';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'user'
})
export class UserComponent implements OnInit, OnDestroy {
    @Input()
    showAvatar: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;
    private _user: User;

    /**
     * Constructor
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {Router} _router
     * @param {UserService} _userService
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private _userService: UserService,
        public _openDrawerService: OpenDrawerService,
        private _authentication: AuthService
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.showAvatar = true;
    }

    get user(): AuthenticatedUser {
        return this._authentication.authenticatedUser.getValue();
    }

    public openDrawer(): void {
        this._openDrawerService.open();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to user changes
        this._userService.user$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((user: User) => {
                this._user = user;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }



    /**
     * Sign out
     */
    signOut(): void {
        this._router.navigate(['/sign-out']);
    }
}
