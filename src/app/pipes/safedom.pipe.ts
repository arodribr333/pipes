import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Pipe({
    name: 'safedom'
})
export class SafedomPipe implements PipeTransform {

    constructor(private domSanitizer:DomSanitizer) {}

    transform ( value: string, ...args: unknown[] ): SafeResourceUrl {
        console.log( this.domSanitizer.bypassSecurityTrustResourceUrl( value ));
        return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
    }

}
