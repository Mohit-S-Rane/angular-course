import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'truncate'})

export class Truncate implements PipeTransform {
    transform(value: any, limit = 10, trail = '...') {
        return value.length > limit ? value.substring(0, limit) + trail : value
    }
}