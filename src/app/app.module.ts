import { NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { LOADING_BAR_CONFIG, LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { TreoModule } from '@treo';
import { TreoMockApiModule } from '@treo/lib/mock-api';
import { TreoConfigModule } from '@treo/services/config';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { appConfig } from 'app/core/config/app.config';
import { CoreModule } from 'app/core/core.module';
import { mockDataServices } from 'app/data/mock';
import { LayoutModule } from 'app/layout/layout.module';
import { MarkdownModule } from 'ngx-markdown';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { ScrollDirective } from './shared/directives/scroll.directive';


registerLocaleData(es);


const routerConfig: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules,
    useHash: true
};

@NgModule({
    declarations: [
        AppComponent,
        ScrollDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LoadingBarHttpClientModule,

        RouterModule.forRoot(appRoutes, routerConfig),

        // Treo & Treo Mock API
        TreoModule,
        TreoConfigModule.forRoot(appConfig),
        TreoMockApiModule.forRoot(mockDataServices),

        // Core
        CoreModule,

        // Layout
        LayoutModule,

        // 3rd party modules
        MarkdownModule.forRoot({}),
        LoadingBarModule,

        ToastrModule.forRoot(),

        NgxMatNativeDateModule,
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        { provide: LOADING_BAR_CONFIG, useValue: { latencyThreshold: 100 } },
        [
            { provide: LOCALE_ID, useValue: "es-ES" }, //your locale
        ]
    ]
})
export class AppModule {
}
