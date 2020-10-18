import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'date' })
export class DatePipe implements PipeTransform {
    transform(value: Date): any {
        if (!value) return value;

        let month = value.getMonth() < 10 ? '0' + (value.getMonth()+1).toString() : (value.getMonth()+1).toString();
        let day = value.getDate() < 10 ? '0' + value.getDate().toString() : value.getDate().toString();

        return value.getFullYear().toString()+'-'+month+'-'+day;
    }
}