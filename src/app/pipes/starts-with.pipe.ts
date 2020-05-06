import {
    Pipe,
    PipeTransform
} from '@angular/core';

@Pipe({
    name: 'startsWith'
})
export class StartsWithPipe implements PipeTransform {

    transform(fullText: string, textMatch: string): boolean {
        return fullText.startsWith(textMatch);
      }

}
