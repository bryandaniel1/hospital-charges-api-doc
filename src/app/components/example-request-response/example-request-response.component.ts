import { Component, OnInit, Input } from '@angular/core';
import { RequestResponse } from 'src/app/models/request-response.model';

/**
 * Displays the request and response of an example call.
 */
@Component({
  selector: 'app-example-request-response',
  templateUrl: './example-request-response.component.html',
  styleUrls: ['./example-request-response.component.css']
})
export class ExampleRequestResponseComponent implements OnInit {

  /**
   * The property provided by the parent component
   */
  @Input('data') requestResponse: RequestResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
