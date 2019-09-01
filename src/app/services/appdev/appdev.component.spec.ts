import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppdevComponent } from './appdev.component';

describe('AppdevComponent', () => {
  let component: AppdevComponent;
  let fixture: ComponentFixture<AppdevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppdevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
