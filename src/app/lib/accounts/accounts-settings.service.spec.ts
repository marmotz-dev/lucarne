import { TestBed } from '@angular/core/testing';

import { AccountsSettingsService } from './accounts-settings.service';

describe('AccountsSettingsService', () => {
  let service: AccountsSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
