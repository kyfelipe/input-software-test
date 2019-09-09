import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatStepperModule} from '@angular/material';

import {StepperComponent} from './stepper.component';
import {StepperRoutingModule} from './stepper-routing.module';
import {NumberModule} from '../../shared/directives/number/number.module';

@NgModule({
    declarations: [StepperComponent],
    imports: [
        CommonModule,
        StepperRoutingModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        NumberModule
    ],
    exports: [StepperComponent],
})
export class StepperModule { }
