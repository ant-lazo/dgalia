import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreoDrawerComponent } from '@treo/components/drawer/drawer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
    declarations: [
        TreoDrawerComponent
    ],
    imports: [
        CommonModule,
        CommonModule,
        MatSlideToggleModule,
        MatIconModule,
        MatButtonModule,
        MatRadioModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule
    ],
    exports: [
        TreoDrawerComponent
    ]
})
export class TreoDrawerModule {
}
