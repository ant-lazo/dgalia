import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import appMenu from 'assets/config/app-menus.json';

@Injectable({
    providedIn: 'root'
})
export class InitialDataResolver implements Resolve<any>
{
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Load messages
     *
     * @private
     */
    private _loadMessages(): Observable<any> {
        return this._httpClient.get('api/common/messages');
    }

    /**
     * Load navigation data
     *
     * @private
     */
    private _loadNavigation(): Observable<any> {
        return this._httpClient.get('api/common/navigation');
    }

    /**
     * Load notifications
     *
     * @private
     */
    private _loadNotifications(): Observable<any> {
        return this._httpClient.get('api/common/notifications');
    }

    /**
     * Load shortcuts
     *
     * @private
     */
    private _loadShortcuts(): Observable<any> {
        return this._httpClient.get('api/common/shortcuts');
    }

    /**
     * Load user
     *
     * @private
     */
    private _loadUser(): Observable<any> {
        return this._httpClient.get('api/common/user');
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return forkJoin([

            // Messages
            this._loadMessages(),

            // Navigation data
            this._loadNavigation(),

            // Notifications
            this._loadNotifications(),

            // Shortcuts
            this._loadShortcuts(),

            // User
            this._loadUser()
        ]).pipe(
            map((data) => {
                return {
                    messages: data[0].messages,
                    navigation: {
                        compact: appMenu.compact,
                        default: appMenu.general,
                        futuristic: appMenu.futuristic,
                        horizontal: appMenu.horizontal,
                    },
                    notifications: data[2].notifications,
                    shortcuts: data[3].shortcuts,
                    user: data[4].user
                };
            })
        );
    }
}
