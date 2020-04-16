import {
    Pipe,
    PipeTransform
} from '@angular/core';

@Pipe({
    name: 'orderByPosition'
})
export class OrderByPositionPipe implements PipeTransform {

    transform(value: any[], args ? : any): any {
        return value.sort((a,b) => a - b);
    }

}
