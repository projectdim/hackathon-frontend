import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosWidgetComponent } from './photos-widget.component';

describe('PhotosWidgetComponent', () => {
  let component: PhotosWidgetComponent;
  let fixture: ComponentFixture<PhotosWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
