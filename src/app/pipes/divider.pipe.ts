import {
    Pipe,
    PipeTransform
} from '@angular/core';

@Pipe({
    name: 'divider'
})
export class DividerPipe implements PipeTransform {

    transform(value: string[], divider: string): any {
        if (!value || !value.length) {
            return ''
        }
        let result = value.shift();
        value.forEach(element => {
            result += divider + element;
        });
        return result;
    }

}
