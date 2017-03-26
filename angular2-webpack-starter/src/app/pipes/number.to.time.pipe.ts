import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'numbertotime' })
export class NumberToTimePipe implements PipeTransform {
    transform(value: number): any {
        if (!value) return value;

        let hour = Math.floor(value / 60);
        let min = value - hour * 60;

        let result = '';

        if (hour < 10) {
            result += '0'+hour.toString()+':';
        } else if (hour < 1) {
            result += '00:'
        } else {
            result += hour.toString();
        }

        if (min < 10) {
            result += '0'+min.toString();
        } else if (min < 1) {
            result += '00'
        } else {
            result += min.toString();
        }

        return result;
    }
}