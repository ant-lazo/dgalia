import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TreoMediaWatcherService } from '@treo/services/media-watcher';
import { TreoNavigationService } from '@treo/components/navigation';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthenticatedUser } from 'app/core/models/authenticated-user.model';

@Component({
    selector: 'classy-layout',
    templateUrl: './classy.component.html',
    styleUrls: ['./classy.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ClassyLayoutComponent implements OnInit, OnDestroy {
    data: any;
    isScreenSmall: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ActivatedRoute} _activatedRoute
     * @param {Router} _router
     * @param {TreoMediaWatcherService} _treoMediaWatcherService
     * @param {TreoNavigationService} _treoNavigationService
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _treoMediaWatcherService: TreoMediaWatcherService,
        private _treoNavigationService: TreoNavigationService,
        private _authentication: AuthService
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to the resolved route data
        this._activatedRoute.data.subscribe((data: Data) => {
            this.data = data.initialData;
        });

        // Subscribe to media changes
        this._treoMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {

                // Check if the breakpoint is 'lt-md'
                this.isScreenSmall = matchingAliases.includes('lt-md');
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

    toggleNavigation(key: any): void {
        // Get the navigation
        const navigation = this._treoNavigationService.getComponent(key);

        if (navigation) {
            // Toggle the opened status
            navigation.toggle();
        }
    }


    /**
     * get authenticathe user
     */

    public get user(): AuthenticatedUser {
        return this._authentication.authenticatedUser.getValue();
    }

}
