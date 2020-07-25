import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointDisplayComponent } from './endpoint-display.component';

describe('EndpointDisplayComponent', () => {
  let component: EndpointDisplayComponent;
  let fixture: ComponentFixture<EndpointDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndpointDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
