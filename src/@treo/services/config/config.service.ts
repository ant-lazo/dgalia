import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { merge } from 'lodash-es';
import { TREO_APP_CONFIG } from '@treo/services/config/config.constants';
import { Layout } from 'app/layout/layout.types';
import { AppConfig, Theme } from 'app/core/config/app.config';

@Injectable({
    providedIn: 'root'
})
export class TreoConfigService {
    // Private
    private _config: BehaviorSubject<any>;

    /**
     * Constructor
     */
    constructor(@Inject(TREO_APP_CONFIG) config: any) {
        // Set the private defaults
        this._config = new BehaviorSubject(config);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for config
     */
    set config(value: any) {
        // Merge the new config over to the current config
        const config = merge({}, this._config.getValue(), value);

        // Execute the observable
        this._config.next(config);
    }

    get config$(): Observable<any> {
        return this._config.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resets the config to the default
     */
    reset(): void {
        // Set the config
        this._config.next(this.config);
    }

    public setColorTheme(colorThemen: Theme): void {
        const config = this._config.value;
        config.theme = colorThemen;
        this.setConfigSelected(config);
        this._config.next(config);
    }

    public setTheme(theme: Layout): void {
        const config = this._config.value;
        config.layout = theme;
        this.setConfigSelected(config);
        this._config.next(config);
    }

    public getSelectedConfig(): AppConfig {
        return JSON.parse(localStorage.getItem('app-config'));
    }

    private setConfigSelected(config: AppConfig): void {
        localStorage.setItem('app-config', JSON.stringify(config));
    }
}
