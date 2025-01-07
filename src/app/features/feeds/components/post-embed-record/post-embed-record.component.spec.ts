import { NgOptimizedImage } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { embedRecordMock } from '@app/features/feeds/lib/feeds/metadata/tests/mock/embed-record.mock';
import { IonicModule } from '@ionic/angular';

import { PostEmbedRecordComponent } from './post-embed-record.component';

describe('PostEmbedRecordComponent', () => {
  let component: PostEmbedRecordComponent;
  let fixture: ComponentFixture<PostEmbedRecordComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PostEmbedRecordComponent],
      imports: [IonicModule.forRoot(), NgOptimizedImage],
    }).compileComponents();

    fixture = TestBed.createComponent(PostEmbedRecordComponent);
    component = fixture.componentInstance;
    component.embed = embedRecordMock;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
