import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  intlFormat,
} from 'date-fns';

@Pipe({
  name: 'timeAgo',
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {
  constructor(private readonly translate: TranslateService) {}

  transform(value: string | number | Date | null | undefined | false): string {
    if (!value) {
      return '';
    }

    const now = new Date();
    const seconds = differenceInSeconds(now, value);

    if (seconds < 60) {
      return this.translate.instant('shared.time-ago.seconds', { count: seconds });
    }

    const minutes = differenceInMinutes(now, value);
    if (minutes < 60) {
      return this.translate.instant('shared.time-ago.minutes', { count: minutes });
    }

    const hours = differenceInHours(now, value);
    if (hours < 24) {
      return this.translate.instant('shared.time-ago.hours', { count: hours });
    }

    const days = differenceInDays(now, value);
    if (days < 30) {
      return this.translate.instant('shared.time-ago.days', { count: days });
    }

    const months = differenceInMonths(now, value);
    if (months < 12) {
      return this.translate.instant('shared.time-ago.months', { count: months });
    }

    return intlFormat(
      value,
      { day: 'numeric', month: 'numeric', year: 'numeric' },
      { locale: this.translate.currentLang }
    );
  }
}
