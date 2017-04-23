import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'numbertotime' })
export class NumberToTimePipe implements PipeTransform {
    transform(value: number): any {
        if (!value) return value;

        let hour = Math.floor(value / (60 * 60));
        let min = Math.floor(value / 60 - hour * 60);
        let sec = value - (min * 60 + hour * 60 * 60)

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

        if (sec < 10) {
            result += ':0'+sec.toString();
        } else if (sec < 1) {
            result += ':00'
        } else {
            result += ':'+sec.toString();
        }

        return result;
    }
}