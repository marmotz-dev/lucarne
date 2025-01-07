import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { format, set, sub, subMilliseconds } from 'date-fns';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { TimeAgoPipe } from './time-ago.pipe';

describe('TimeAgoPipe', () => {
  let pipe: TimeAgoPipe;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateTestingModule.withTranslations({
          fr: {
            shared: {
              'time-ago': {
                seconds: '{{count}}s',
                minutes: '{{count}}m',
                hours: '{{count}}h',
                days: '{{count}}j',
                months: '{{count}}mo',
                years: '{{count}}a',
              },
            },
          },
          en: {},
        }).withDefaultLanguage('fr'),
      ],
    });

    translateService = TestBed.inject(TranslateService);
    translateService.currentLang = 'fr';
    pipe = new TimeAgoPipe(translateService);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('should return empty string on non valid data', () => {
    it('work with undefined', () => {
      expect(pipe.transform(undefined)).toBe('');
    });

    it('work with null', () => {
      expect(pipe.transform(null)).toBe('');
    });

    it('work with false', () => {
      expect(pipe.transform(null)).toBe('');
    });

    it('work with empty string', () => {
      expect(pipe.transform(null)).toBe('');
    });
  });

  describe('should return seconds', () => {
    it('exactly 30 seconds', () => {
      const date = sub(new Date(), { seconds: 30 });
      expect(pipe.transform(date)).toBe('30s');
    });

    it('more than 30 seconds', () => {
      const date = subMilliseconds(sub(new Date(), { seconds: 30 }), 500);
      expect(pipe.transform(date)).toBe('30s');
    });
  });

  describe('should return minutes', () => {
    it('exactly 5 minutes', () => {
      const date = sub(new Date(), { minutes: 5 });
      expect(pipe.transform(date)).toBe('5m');
    });

    it('more than 5 minutes', () => {
      const date = sub(new Date(), { minutes: 5, seconds: 30 });
      expect(pipe.transform(date)).toBe('5m');
    });
  });

  describe('should return hours', () => {
    it('exactly 3 hours', () => {
      const date = sub(new Date(), { hours: 3 });
      expect(pipe.transform(date)).toBe('3h');
    });

    it('more than 3 hours', () => {
      const date = sub(new Date(), { hours: 3 });
      expect(pipe.transform(date)).toBe('3h');
    });
  });

  describe('should return days', () => {
    it('exactly 2 days', () => {
      const date = sub(new Date(), { days: 2 });
      expect(pipe.transform(date)).toBe('2j');
    });

    it('more than 2 days', () => {
      const date = sub(new Date(), { days: 2, hours: 8 });
      expect(pipe.transform(date)).toBe('2j');
    });
  });

  describe('should return months', () => {
    it('exactly 2 months', () => {
      const date = sub(new Date(), { months: 2 });
      expect(pipe.transform(date)).toBe('2mo');
    });

    it('more than 2 months', () => {
      const date = sub(new Date(), { months: 2, days: 8 });
      expect(pipe.transform(date)).toBe('2mo');
    });
  });

  describe('should return localized date for date older than 1 year', () => {
    it('exactly 1 year with french locale', () => {
      const date = sub(new Date(), { years: 1 });
      expect(pipe.transform(date)).toBe(format(date, 'dd/MM/yyyy'));
    });

    it('exactly 1 year with english locale', () => {
      const date = sub(new Date(), { years: 1 });
      translateService.use('en');
      expect(pipe.transform(date)).toBe(format(date, 'M/d/yyyy'));
    });

    it('more than 1 year with french locale', () => {
      const date = set(sub(new Date(), { years: 1, months: 6 }), { date: 1 });
      expect(pipe.transform(date)).toBe(format(date, 'dd/MM/yyyy'));
    });

    it('more than 1 year with english locale', () => {
      const date = set(sub(new Date(), { years: 1, months: 6 }), { date: 1 });
      translateService.use('en');
      expect(pipe.transform(date)).toBe(format(date, 'M/d/yyyy'));
    });
  });
});
