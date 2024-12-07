import { Pipe, PipeTransform } from '@angular/core';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tw-merge';

@Pipe({
  name: 'cls',
  standalone: true,
})
export class ClsPipe implements PipeTransform {
  transform(value: ClassValue): string {
    return twMerge(clsx(value));
  }
}
