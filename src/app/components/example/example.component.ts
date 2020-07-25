import { Component, OnInit } from '@angular/core';
import { ExampleService } from 'src/app/services/example.service';
import { EndpointService } from 'src/app/services/endpoint.service';
import { RequestResponse } from 'src/app/models/request-response.model';
import { DiagnosisRelatedGroup } from 'src/app/models/diagnosis-related-group.model';

/**
 * Displays the example client functionality.
 */
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  /**
   * The model for request and response
   */
  requestResponse: RequestResponse;

  /**
   * The inpatient states
   */
  states: string[];

  /**
   * The selected state
   */
  selectedState: string;

  /**
   * The inpatient cities
   */
  cities: string[];

  /**
   * The selected city
   */
  selectedCity: string;

  /**
   * The diagnosis-related groups
   */
  drgs: DiagnosisRelatedGroup[];

  /**
   * The selected diagnosis-related group
   */
  selectedDrgId: number;

  /**
   * Injects the services and creates the RequestResponse object.
   * 
   * @param exampleService the example service
   * @param endpointService the endpoint service
   */
  constructor(private exampleService: ExampleService, private endpointService: EndpointService) {
    this.requestResponse = new RequestResponse();
  }

  /**
   * Retrieves inpatient states and sets the request and response data.
   */
  ngOnInit(): void {
    this.endpointService.getEndpointUrl("Inpatient States").subscribe(url => this.requestResponse.url = url);
    this.exampleService.getInpatientStates().subscribe(statesArray => {
      this.requestResponse.response = statesArray;
      this.states = statesArray;
    });
  }

  /**
   * Retrieves inpatient cities for the given state and sets the request and response data.
   * 
   * @param state the chosen state abbreviation
   */
  getInpatientCities(state: string) {
    this.selectedState = state;
    this.selectedCity = null;
    this.drgs = null;
    this.selectedDrgId = null;
    this.endpointService.getInpatientCitiesOperativeUrl(this.selectedState)
      .subscribe(url => this.requestResponse.url = url);
    this.exampleService.getInpatientCities(this.selectedState)
      .subscribe(citiesArray => {
        this.requestResponse.response = citiesArray;
        this.cities = citiesArray;
      });
  }

  /**
   * Retrieves diagnosis-related groups for the given city and sets the request and response data.
   * 
   * @param city the chosen city name
   */
  getDrgs(city: string) {
    this.selectedCity = city;
    this.drgs = null;
    this.selectedDrgId = null;
    this.endpointService.getInpatientDrgsOperativeUrl(this.selectedState, this.selectedCity)
      .subscribe(url => this.requestResponse.url = url);
    this.exampleService.getDrgs(this.selectedState, this.selectedCity)
      .subscribe(drgsArray => {
        this.requestResponse.response = drgsArray;
        this.drgs = drgsArray;
      });
  }

  /**
   * Retrieves the inpatient charges for the given DRG.
   * 
   * @param drgId the chosen diagnosis-related group ID
   */
  getInpatientCharges(drgId: number) {
    this.selectedDrgId = drgId;
    this.endpointService.getInpatientChargesOperativeUrl(this.selectedState, this.selectedCity, this.selectedDrgId)
      .subscribe(url => this.requestResponse.url = url);
    this.exampleService.getInpatientCharges(this.selectedState, this.selectedCity, this.selectedDrgId)
      .subscribe(charges => {
        this.requestResponse.response = charges;
      });
  }

}
