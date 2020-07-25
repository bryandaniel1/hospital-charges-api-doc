import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EndpointService } from './endpoint.service';
import { switchMap } from 'rxjs/operators';
import { DiagnosisRelatedGroup } from '../models/diagnosis-related-group.model';

/**
 * Provides inpatient charge data to support example operations.
 */
@Injectable()
export class ExampleService {

  /**
   * Injects the HttpClient service and the endpoint service.
   * 
   * @param http the HttpClient object
   * @param endpointService the endpoint service
   */
  constructor(private http: HttpClient, private endpointService: EndpointService) { }

  /**
   * Retrieves the list of state abbreviations for inpatient charges.
   * 
   * @return the list of state abbreviations
   */
  getInpatientStates(): Observable<string[]> {
    return this.endpointService.getEndpointUrl("Inpatient States")
      .pipe(switchMap(url => this.http.get<string[]>(url)));
  }

  /**
   * Retrieves the inpatient cities for the given state abbreviation.
   * 
   * @param state the state abbreviation
   * @return the list of cities
   */
  getInpatientCities(state: string): Observable<string[]> {
    return this.endpointService.getInpatientCitiesOperativeUrl(state)
      .pipe(switchMap(url => this.http.get<string[]>(url)));
  }

  /**
   * Retrieves the diagnosis-related groups for the given state abbreviation and city.
   * 
   * @param state the state abbreviation
   * @param city the city
   * @return the list of DRGs
   */
  getDrgs(state: string, city: string): Observable<DiagnosisRelatedGroup[]> {
    return this.endpointService.getInpatientDrgsOperativeUrl(state, city)
      .pipe(switchMap(url => this.http.get<DiagnosisRelatedGroup[]>(url)));
  }

  /**
   * Retrieves the inpatient charges for the given state abbreviation, city, and DRG ID.
   * 
   * @param state the state abbreviation
   * @param city the city
   * @param drgId the diagnosis-related group identifier
   * @return the list of inpatient charges
   */
  getInpatientCharges(state: string, city: string, drgId: number): Observable<string[]> {
    return this.endpointService.getInpatientChargesOperativeUrl(state, city, drgId)
      .pipe(switchMap(url => this.http.get<string[]>(url)));
  }
}
