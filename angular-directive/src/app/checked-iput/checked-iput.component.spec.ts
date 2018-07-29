import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedIputComponent } from './checked-iput.component';

describe('CheckedIputComponent', () => {
  let component: CheckedIputComponent;
  let fixture: ComponentFixture<CheckedIputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedIputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedIputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
