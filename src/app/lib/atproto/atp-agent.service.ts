import { inject, Injectable } from '@angular/core';
import { AccountsSettingsService } from '@app/lib/accounts/accounts-settings.service';
import { Account, NewAccount } from '@app/lib/accounts/accounts.type';
import { AtpSessionData, AtpSessionEvent, AtpAgent as BaseAtpAgent } from '@atproto/api';

@Injectable({
  providedIn: 'root',
})
export class AtpAgent extends BaseAtpAgent {
  private readonly accountsSettingsService: AccountsSettingsService;

  constructor() {
    super({
      service: 'https://bsky.social',
      persistSession: async (event: AtpSessionEvent, session?: AtpSessionData) => {
        await this.saveSession(event, session);
      },
    });

    this.accountsSettingsService = inject(AccountsSettingsService);
  }

  private async getAccountData(account: Partial<Account>, session: AtpSessionData) {
    const profileResponse = await this.getProfile({
      actor: session.did,
    });

    return {
      ...account,
      did: session.did,
      name: profileResponse.data.displayName ?? profileResponse.data.handle,
      avatar: profileResponse.data.avatar,
      session,
    } as Account;
  }

  private async saveSession(event: AtpSessionEvent, session?: AtpSessionData) {
    switch (event) {
      case 'create': {
        if (!session) {
          throw new Error('SESSION_UNAVAILABLE');
        }

        const account = await this.getAccountData(NewAccount, session);
        await this.accountsSettingsService.setAccount(account);
        break;
      }

      case 'update': {
        if (!session) {
          throw new Error('SESSION_UNAVAILABLE');
        }

        const existingAccount = await this.accountsSettingsService.getAccountById(session.did);
        const account = await this.getAccountData(existingAccount, session);
        await this.accountsSettingsService.setAccount(account);
        break;
      }

      case 'expired': {
        const account = (await this.accountsSettingsService.getCurrentAccount())!;
        await this.accountsSettingsService.removeAccount(account);
        // showToastable({
        //   message: _(msg`Sorry! Your session expired. Please log in again.`),
        // });
        break;
      }
    }
  }
}
