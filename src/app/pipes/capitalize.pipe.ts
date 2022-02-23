import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

    //     transform ( value: unknown, ...args: unknown[] ): string {
    //         console.log( value, args );
    //     return 'Hi Chapter!';
    //   }
    transform ( value: string, all: boolean = true ): string {
        value = value.toLocaleLowerCase();
        let parts = value.split( ' ' );
        if ( all ) {
            parts = parts.map( ( part ) => {
                return part.toUpperCase();
            } );
            console.log(parts);
        } else {
            parts.map( (part,partIndex) => {
                parts[ partIndex ] = part[ 0 ].toUpperCase() + part.substring( 1 );
            })
        }
        return parts.join( ' ' );
    }

}
