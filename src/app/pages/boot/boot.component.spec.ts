import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppRoutingModule } from '@app/app-routing.module';
import { IonicModule } from '@ionic/angular';

import { BootComponent } from './boot.component';

describe('BootComponent', () => {
  let component: BootComponent;
  let fixture: ComponentFixture<BootComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BootComponent],
      imports: [IonicModule.forRoot(), AppRoutingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
