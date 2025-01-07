import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsSettingsService } from '@app/lib/accounts/accounts-settings.service';
import { AtpAgent } from '@app/lib/atproto/atp-agent.service';

@Component({
  selector: 'l-boot',
  template: ``,
})
export class BootComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly accountsSettingsService: AccountsSettingsService,
    private readonly agent: AtpAgent
  ) {}

  async ngOnInit() {
    const account = await this.accountsSettingsService.getCurrentAccount();

    if (account?.session) {
      await this.agent.resumeSession(account.session);

      const returnUrl = localStorage.getItem('returnUrl');
      localStorage.removeItem('returnUrl');

      await this.router.navigate([returnUrl ?? '/feeds']);
    } else {
      await this.router.navigate(['/account-add']);
    }
  }
}
