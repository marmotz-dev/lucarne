import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CenteredUiComponent } from './centered.ui-component';

describe('CenteredUiComponent', () => {
  let component: CenteredUiComponent;
  let fixture: ComponentFixture<CenteredUiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CenteredUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CenteredUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
