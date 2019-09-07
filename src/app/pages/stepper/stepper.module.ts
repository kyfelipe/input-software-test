import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepperComponent} from './stepper.component';
import {StepperRoutingModule} from './stepper-routing.module';
import {InputIntegerComponent} from './steps/input-integer/input-integer.component';

@NgModule({
    declarations: [StepperComponent, InputIntegerComponent],
    imports: [
        CommonModule,
        StepperRoutingModule
    ],
    exports: [StepperComponent],
})
export class StepperModule { }
