import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
    public firstFormGroup: FormGroup;
    public secondFormGroup: FormGroup;
    private previousValueFirstCtrl: number;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.firstFormGroup = this.formBuilder.group({
            firstCtrl: ['', Validators.required]
        });

        this.secondFormGroup = this.formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }

    get firstCtrl() {
        return this.firstFormGroup.get('firstCtrl').value;
    }

    get secondCtrl() {
        return this.secondFormGroup.get('secondCtrl').value;
    }

    public updatePreviousValueFirstCtrl() {
        if (this.previousValueFirstCtrl !== this.firstCtrl) {
            this.secondFormGroup.reset();
            this.secondFormGroup.get('secondCtrl').clearValidators();
        }
        this.previousValueFirstCtrl = this.firstCtrl;
    }

    public secondCtrlIsValid() {
        if (this.secondFormGroup.get('secondCtrl').valid) {
            if (this.secondCtrl) {
                if (parseInt(this.firstCtrl) === this.secondCtrl.length) {
                    return false;
                }
            }
        }
        return true;
    }

    public amountRequiredNextStep() {
        return parseInt(this.firstCtrl) - (this.secondCtrl ? this.secondCtrl.length : 0);
    }
}
