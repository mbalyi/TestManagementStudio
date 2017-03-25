import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'time' })
export class TimePipe implements PipeTransform {
    transform(value: Date): any {
        if (!value) return value;

        let h = value.getHours() < 10 ? '0' + value.getHours().toString() : value.getHours().toString();
        let m = value.getMinutes() < 10 ? '0' + value.getMinutes().toString() : value.getMinutes().toString();

        return h+':'+m;
    }
}