import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponseError } from '@shared/api/ApiResponse.error';
import { AtProtoService } from '@shared/atproto/at-proto.service';
import { Account, AccountsSettings, NewAccount, NewAccountsSettings } from '@shared/storage/accounts.type';
import { AppSettingsService } from '@shared/storage/app-settings.service';
import { StorageKeys } from '@shared/storage/storage-keys.enum';
import { wait } from '@shared/utils/wait';

@Component({
  selector: 'app-account-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  protected loginForm: FormGroup;
  protected connecting = false;
  protected globalError?: string;
  protected loginStatus?: string;

  constructor(
    readonly fb: FormBuilder,
    private readonly atProtoService: AtProtoService,
    private readonly appSettings: AppSettingsService,
    private readonly router: Router
  ) {
    this.loginForm = this.fb.group({
      identifier: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async submit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.connecting = true;

    try {
      const { identifier, password } = this.loginForm.value;

      this.loginStatus = 'feature.account-add.login.logging-in';
      const loginResponse = await this.atProtoService.login(identifier, password);

      this.loginStatus = 'feature.account-add.login.fetching-profile';
      const profileResponse = await this.atProtoService.getProfile();

      this.loginStatus = 'feature.account-add.login.adding-account';
      const account: Account = {
        ...NewAccount,
        id: loginResponse.json.did,
        name: profileResponse.json.displayName,
        avatar: profileResponse.json.avatar,
        tokens: {
          accessToken: loginResponse.json.accessJwt,
          refreshToken: loginResponse.json.refreshJwt,
        },
      };
      const accounts = await this.appSettings.get<AccountsSettings>(StorageKeys.Accounts, NewAccountsSettings);
      accounts.accounts.push(account);
      accounts.currentAccountId = account.id;
      await this.appSettings.set(StorageKeys.Accounts, accounts);
      await wait(500);

      this.loginStatus = 'feature.account-add.login.login-success';
      await wait(500);

      await this.router.navigate(['/feeds']);
    } catch (e) {
      alert(e);
      const error = e as ApiResponseError;

      if (error.response.status === 401 && error.response.json.message === 'Invalid identifier or password') {
        this.globalError = 'feature.account-add.login.invalid-credentials';
        this.loginForm.markAsUntouched();
      }

      this.connecting = false;
    }
  }
}
