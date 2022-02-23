import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    chapter:string = 'Chapter';
    app:string = 'Angular';
    title: string = 'Pipes';
    pipeLinks: any[] = [
        {
            url: 'https://angular.io/guide/pipes',
            titleText: this.app + ' ' + this.title,
            linkText: this.app + ' ' + this.title
        },
        {
            url: 'https://angular.io/api/?type=pipe',
            titleText: 'API List',
            linkText: 'API List'
        }
    ]
    tableCols: string[] = ['Variable','Pipe','Descripción','Salida'];
    pipes:string[] = ['Text Transfoorm','Slice','Decimal','Percent','Currency','JSON','Async','Date','Languages','Custom Pipes']
    nameTransform: string = 'aLfredO rodRígueZ';
    nameNormal: string = 'Alfredo Rodríguez';
    numberArray: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    PI: number = Math.PI;
    percent1: number = 0.259;
    percent2: number = 0.345;
    percent3: number = 0.344;
    salary: number = 50000.6;
    hero = {
        name: 'Wade Winston Wilson',
        heroName: 'Deadpool',
        alias: 'Merc with a mouth',
        age: 31,
        attributes: {
            race: 'Mutant human',
            sex: 'masculine',
            height:	'1,88m (6′2″)',
            weight:	'81.5kg (179lb)'
        }
    }
    promiseValue = new Promise<string>( ( resolve ) => {
        setTimeout( () => {
            resolve( 'data arrived' );
        }, 10000 );
    } );
    dateObject: Date = new Date();
    localeLanguages: string[] = [ 'es', 'en', 'fr' ];
    languageSelected: string = 'es';

    changeLocale = ( locale:string ) => {
        this.languageSelected = locale;
    }
}
