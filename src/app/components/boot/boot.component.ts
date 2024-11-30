import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@shared/atproto/auth.service';
import { AccountsSettings, NewAccountsSettings } from '@shared/storage/accounts.type';
import { AppSettingsService } from '@shared/storage/app-settings.service';
import { StorageKeys } from '@shared/storage/storage-keys.enum';

@Component({
  selector: 'app-boot',
  template: ``,
})
export class BootComponent implements OnInit {
  constructor(
    private readonly appSettingsService: AppSettingsService,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  async ngOnInit() {
    const accounts = await this.appSettingsService.get<AccountsSettings>(StorageKeys.Accounts, NewAccountsSettings);

    if (accounts.accounts?.length > 0) {
      let currentAccount = accounts.accounts.find((account) => account.id === accounts.currentAccountId);

      if (!currentAccount) {
        accounts.currentAccountId = accounts.accounts[0].id;
        await this.appSettingsService.set(StorageKeys.Accounts, accounts);
        currentAccount = accounts.accounts[0];
      }

      await this.authService.setTokens(currentAccount.tokens);

      await this.router.navigate(['/feeds']);
    } else {
      await this.router.navigate(['/account-add']);
    }
  }
}
