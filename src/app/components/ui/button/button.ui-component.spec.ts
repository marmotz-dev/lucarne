import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ButtonUiComponent } from '@app/components/ui/button/button.ui-component';

describe('ButtonUiComponent', () => {
  let component: ButtonUiComponent;
  let fixture: ComponentFixture<ButtonUiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ButtonUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
