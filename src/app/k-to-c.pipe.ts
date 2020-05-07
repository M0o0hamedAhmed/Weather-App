import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'kToC'
})
export class KToCPipe implements PipeTransform {

  transform(temp_min: number,limit:273): unknown {
    return Math.floor(temp_min-273)
    
    
  }

}
