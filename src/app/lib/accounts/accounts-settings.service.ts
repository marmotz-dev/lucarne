import { Injectable } from '@angular/core';
import { Account, AccountsSettings, NewAccountsSettings } from '@app/lib/accounts/accounts.type';
import { AppSettingsService } from '@app/lib/storage/app-settings.service';
import { StorageKeys } from '@app/lib/storage/storage-keys.enum';

@Injectable({
  providedIn: 'root',
})
export class AccountsSettingsService {
  constructor(private readonly appSettingsService: AppSettingsService) {}

  async getAccountById(id: string) {
    const accountsSettings = await this.getAccountsSettings();

    const account = accountsSettings.accounts.find((account) => account.did === id);

    if (!account) {
      throw new Error('ACCOUNT_NOT_FOUND');
    }

    return account;
  }

  async getAccountsSettings() {
    return this.appSettingsService.get<AccountsSettings>(StorageKeys.Accounts, NewAccountsSettings);
  }

  async getCurrentAccount() {
    const accountsSettings = await this.getAccountsSettings();

    if (!accountsSettings.accounts.length) {
      return;
    }

    let currentAccount = accountsSettings.accounts.find((account) => account.did === accountsSettings.currentAccountId);

    if (!currentAccount) {
      accountsSettings.currentAccountId = accountsSettings.accounts[0].did;
      await this.save(accountsSettings);
      currentAccount = accountsSettings.accounts[0];
    }

    return currentAccount;
  }

  async removeAccount(existingAccount: Account) {
    const accountsSettings = await this.getAccountsSettings();
    accountsSettings.accounts = accountsSettings.accounts.filter((a) => a.did !== existingAccount.did);
    await this.appSettingsService.set(StorageKeys.Accounts, accountsSettings);
  }

  async save(accountsSettings: AccountsSettings) {
    await this.appSettingsService.set(StorageKeys.Accounts, accountsSettings);
  }

  async setAccount(account: Account) {
    const accountsSettings = await this.getAccountsSettings();

    accountsSettings.accounts = [account, ...accountsSettings.accounts.filter((a) => a.did !== account.did)];

    accountsSettings.currentAccountId = account.did;

    await this.appSettingsService.set(StorageKeys.Accounts, accountsSettings);
  }
}
