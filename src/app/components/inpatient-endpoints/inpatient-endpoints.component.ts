import { Component, OnInit } from '@angular/core';
import { EndpointService } from 'src/app/services/endpoint.service';
import { Endpoint } from 'src/app/models/endpoint.model';

/**
 * Displays the accordion view of inpatient endpoints.
 */
@Component({
  selector: 'app-inpatient-endpoints',
  templateUrl: './inpatient-endpoints.component.html',
  styleUrls: ['./inpatient-endpoints.component.css']
})
export class InpatientEndpointsComponent implements OnInit {

  endpoints: Endpoint[];

  constructor(private endpointService: EndpointService) { }

  ngOnInit(): void {
    this.endpointService.getInpatientEndpoints().subscribe(endpointsArray => this.endpoints = endpointsArray);
  }
}
