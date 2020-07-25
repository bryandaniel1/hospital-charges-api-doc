import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpatientEndpointsComponent } from './outpatient-endpoints.component';

describe('OutpatientEndpointsComponent', () => {
  let component: OutpatientEndpointsComponent;
  let fixture: ComponentFixture<OutpatientEndpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutpatientEndpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutpatientEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
