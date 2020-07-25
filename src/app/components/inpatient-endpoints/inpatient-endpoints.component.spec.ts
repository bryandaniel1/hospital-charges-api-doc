import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpatientEndpointsComponent } from './inpatient-endpoints.component';

describe('InpatientEndpointsComponent', () => {
  let component: InpatientEndpointsComponent;
  let fixture: ComponentFixture<InpatientEndpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InpatientEndpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpatientEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
