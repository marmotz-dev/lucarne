import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonUiComponent } from '@app/components/ui/button/button.ui-component';
import { FormInputPasswordUiComponent } from '@app/components/ui/form/input-password/input-password.ui-component';
import { FormInputTextUiComponent } from '@app/components/ui/form/input-text/input-text.ui-component';
import { ClsPipe } from '@app/lib/utils/cls.pipe';
import { IonicModule } from '@ionic/angular';
import { TranslateTestingModule } from 'ngx-translate-testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        IonicModule.forRoot(),
        TranslateTestingModule.withTranslations({}),
        ReactiveFormsModule,
        ClsPipe,
        ButtonUiComponent,
        FormInputTextUiComponent,
        FormInputPasswordUiComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
