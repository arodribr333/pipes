import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, showPassword:boolean = true): string {
      return ( showPassword ) ? '*'.repeat(value.length) : value;
  }

}
