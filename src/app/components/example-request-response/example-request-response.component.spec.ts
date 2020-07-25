import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleRequestResponseComponent } from './example-request-response.component';

describe('ExampleRequestResponseComponent', () => {
  let component: ExampleRequestResponseComponent;
  let fixture: ComponentFixture<ExampleRequestResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleRequestResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleRequestResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
