import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonUiComponent } from '@app/components/ui/button/button.ui-component';
import { FormInputPasswordUiComponent } from '@app/components/ui/form/input-password/input-password.ui-component';
import { FormInputTextUiComponent } from '@app/components/ui/form/input-text/input-text.ui-component';
import { MessageUiComponent } from '@app/components/ui/message/message.ui-component';
import { LoginComponent } from '@app/features/account-add/components/login/login.component';
import { ClsPipe } from '@app/lib/utils/cls.pipe';
import { IonicModule } from '@ionic/angular';
import { TranslatePipe } from '@ngx-translate/core';
import { Button } from 'primeng/button';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputText } from 'primeng/inputtext';
import { Password } from 'primeng/password';

import { AccountAddRoutingModule } from './account-add-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AccountAddRoutingModule,
    IonicModule,
    FormsModule,
    TranslatePipe,
    ReactiveFormsModule,
    ClsPipe,
    MessageUiComponent,
    IftaLabelModule,
    InputText,
    Password,
    Button,
    FormInputTextUiComponent,
    FormInputPasswordUiComponent,
    ButtonUiComponent,
  ],
})
export class AccountAddModule {}
