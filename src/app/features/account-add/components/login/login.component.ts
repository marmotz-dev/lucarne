import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/lib/auth/auth.service';
import { XRPCError } from '@atproto/xrpc';

@Component({
  selector: 'l-account-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  protected loginForm: FormGroup;
  protected connecting = false;
  protected globalError?: 'invalid-credentials' | 'unknown-error';
  protected loginStatus?: 'connecting' | 'fetching-profile' | 'adding-account' | 'connected';

  constructor(
    readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService
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

      this.loginStatus = 'connecting';
      const loginResponse = await this.authService.login(identifier, password);

      // this.loginStatus = 'fetching-profile';
      // const profileResponse = await this.atProtoService.getProfile();

      // this.loginStatus = 'adding-account';
      // const account: Account = {
      //   ...NewAccount,
      //   did: loginResponse.data.did,
      //   name: profileResponse.data.displayName ?? profileResponse.data.handle,
      //   avatar: profileResponse.data.avatar,
      //   session: this.atProtoService.getSession(),
      // };
      // const accounts = await this.appSettings.get<AccountsSettings>(StorageKeys.Accounts, NewAccountsSettings);
      // accounts.accounts.push(account);
      // accounts.currentAccountId = account.did;
      // await this.appSettings.set(StorageKeys.Accounts, accounts);
      // await wait(500);
      //
      // this.loginStatus = 'connected';
      // await wait(500);

      await this.router.navigate(['/feeds']);
    } catch (e) {
      const error = e as XRPCError;

      if (error.status === 401 && error.message === 'Invalid identifier or password') {
        this.globalError = 'invalid-credentials';
      } else {
        this.globalError = 'unknown-error';
      }

      this.loginForm.markAsUntouched();
      this.connecting = false;
    }
  }
}
