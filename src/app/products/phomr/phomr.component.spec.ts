import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhomrComponent } from './phomr.component';

describe('PhomrComponent', () => {
  let component: PhomrComponent;
  let fixture: ComponentFixture<PhomrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhomrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhomrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
