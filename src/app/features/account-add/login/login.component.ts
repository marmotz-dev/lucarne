import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  protected identifier?: string;
  protected password?: string;

  constructor() {}

  addAccount() {
    console.log('login', this.identifier, this.password);
  }

  ngOnInit() {}
}
