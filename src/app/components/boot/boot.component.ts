import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accounts, NewAccounts } from '../../shared/storage/accounts.type';
import { AppSettingsService } from '../../shared/storage/app-settings.service';
import { StorageKeys } from '../../shared/storage/storage-keys.enum';

@Component({
  selector: 'app-boot',
  template: ``,
})
export class BootComponent implements OnInit {
  constructor(
    private readonly appSettingsService: AppSettingsService,
    private readonly router: Router
  ) {}

  async ngOnInit() {
    const accounts = await this.appSettingsService.get<Accounts>(StorageKeys.accounts, NewAccounts);

    if (accounts.accounts?.length > 0) {
      await this.router.navigate(['/feeds']);
    } else {
      await this.router.navigate(['/account-add']);
    }
  }
}
