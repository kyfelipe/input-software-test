import {Directive, HostListener} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
    selector: '[appNumber]'
})
export class NumberDirective {
    constructor(public ngControl: NgControl) { }

    @HostListener('ngModelChange', ['$event']) onModelChange(event) {
        if (!event) {
            return;
        }
        const valor = event.replace(/\D/g, '');
        this.ngControl.valueAccessor.writeValue(valor);
    }
}
