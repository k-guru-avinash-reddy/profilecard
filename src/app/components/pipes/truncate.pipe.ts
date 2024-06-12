import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string = '', args: any[]): string {
    let limit = args.length > 0 ? parseInt(args[0], 10) : 50;
    const trail = args.length > 1 ? args[1] : '...';
    if (args.length > 3 && args[3] === true) {
      limit = 100;
    } else if (args.length > 3 && args[4] === true) {
      limit = 150;
    }
    value = (value === null)? '' : value;
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
