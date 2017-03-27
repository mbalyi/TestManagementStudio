import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'date' })
export class DatePipe implements PipeTransform {
    transform(value: Date): any {
        if (!value) return value;

        let month = value.getMonth() < 10 ? '0' + value.getMonth().toString() : value.getMonth().toString();
        let day = value.getDay() < 10 ? '0' + value.getDay().toString() : value.getDay().toString();

        return value.getFullYear().toString()+'-'+month+'-'+day;
    }
}