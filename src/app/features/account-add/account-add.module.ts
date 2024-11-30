import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '@features/account-add/components/login/login.component';
import { IonicModule } from '@ionic/angular';
import { TranslatePipe } from '@ngx-translate/core';
import { ClsPipe } from '@shared/pipes/cls.pipe';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputText } from 'primeng/inputtext';
import { Message } from 'primeng/message';
import { Password } from 'primeng/password';

import { AccountAddRoutingModule } from './account-add-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AccountAddRoutingModule,
    IonicModule,
    FormsModule,
    Button,
    Card,
    IftaLabelModule,
    InputText,
    Password,
    TranslatePipe,
    ReactiveFormsModule,
    Message,
    ClsPipe,
  ],
})
export class AccountAddModule {}
