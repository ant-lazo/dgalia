import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { TreoModule } from '@treo';
import { TreoConfigModule } from '@treo/services/config';
import { TreoMockApiModule } from '@treo/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockDataServices } from 'app/data/mock';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LOADING_BAR_CONFIG } from '@ngx-loading-bar/core';


const routerConfig: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules,
    useHash: true
};

@NgModule({
    declarations: [
        AppComponent,
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
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        { provide: LOADING_BAR_CONFIG, useValue: { latencyThreshold: 100 } }
    ]
})
export class AppModule {
}
