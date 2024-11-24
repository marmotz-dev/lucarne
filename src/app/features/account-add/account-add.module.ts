import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputText } from 'primeng/inputtext';

import { AccountAddRoutingModule } from './account-add-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, AccountAddRoutingModule, IonicModule, FormsModule, Button, Card, IftaLabelModule, InputText],
})
export class AccountAddModule {}
