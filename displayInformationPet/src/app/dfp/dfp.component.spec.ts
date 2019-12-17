import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DFPComponent } from './dfp.component';

describe('DFPComponent', () => {
  let component: DFPComponent;
  let fixture: ComponentFixture<DFPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DFPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DFPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
