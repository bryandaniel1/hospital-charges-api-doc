import { Component, OnInit } from '@angular/core';
import { Endpoint } from 'src/app/models/endpoint.model';
import { EndpointService } from 'src/app/services/endpoint.service';

/**
 * Displays the accordion view of outpatient endpoints.
 */
@Component({
  selector: 'app-outpatient-endpoints',
  templateUrl: './outpatient-endpoints.component.html',
  styleUrls: ['./outpatient-endpoints.component.css']
})
export class OutpatientEndpointsComponent implements OnInit {

  endpoints: Endpoint[];

  constructor(private endpointService: EndpointService) { }

  ngOnInit(): void {
    this.endpointService.getOutpatientEndpoints().subscribe(endpointsArray => this.endpoints = endpointsArray);
  }

}
