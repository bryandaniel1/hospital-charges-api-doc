import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Endpoint } from '../models/endpoint.model';
import { InpatientChargeDescription } from '../models/inpatient-charge-description.model';
import { DrgDescription } from '../models/drg-description.model';
import { ApcDescription } from '../models/apc-description.model';
import { OutpatientChargeDescription } from '../models/outpatient-charge-description.model';

/**
 * Provides information on the API endpoints.
 */
@Injectable()
export class EndpointService {

    /**
     * Injects the HttpClient object.
     * 
     * @param http the HttpClient object
     */
    constructor(private http: HttpClient) { }

    /**
     * Returns the list of inpatient endpoints.
     * 
     * @return the inpatient endpoints
     * @return the list of inpatient endpoints
     */
    public getInpatientEndpoints(): Observable<Endpoint[]> {
        return this.getEndpoints()
            .pipe(map(endpointsArray => endpointsArray.filter(endpoint => endpoint.type === "inpatient")));
    }

    /**
     * Returns the list of outpatient endpoints.
     * 
     * @return the outpatient endpoints
     * @return the list of outpatient endpoints
     */
    public getOutpatientEndpoints(): Observable<Array<Endpoint>> {
        return this.getEndpoints()
            .pipe(map(endpointsArray => endpointsArray.filter(endpoint => endpoint.type === "outpatient")));
    }

    /**
     * Returns the URL of the endpoint with the matching title. The URL returned 
     * contains placeholders and is used for display only.
     * 
     * @param title the endpoint title to match 
     * @return the URL to display for the given title
     */
    public getEndpointUrl(title: string): Observable<string> {
        return this.getEndpoints()
            .pipe(map(endpointsArray => endpointsArray.find(endpoint => endpoint.title === title).url));
    }

    /**
     * Returns the URL of the endpoint to retrieve cities with inpatient charges.
     * 
     * @param state the stateAbbreviation URL parameter 
     * @return the URL to find cities
     */
    public getInpatientCitiesOperativeUrl(state: string): Observable<string> {
        return this.getEndpointUrl("Inpatient Cities")
            .pipe(map(url => url.substring(0, url.indexOf("{")).concat(state)));
    }

    /**
     * Returns the URL of the endpoint to retrieve diagnosis-related groups.
     * 
     * @param state the stateAbbreviation URL parameter 
     * @param city the city URL parameter
     * @return the URL to find DRGs
     */
    public getInpatientDrgsOperativeUrl(state: string, city: string): Observable<string> {
        return this.getEndpointUrl("Diagnosis-Related Groups")
            .pipe(map(url => url.substring(0, url.indexOf("{")).concat(state).concat("/").concat(city)));
    }

    /**
     * Returns the URL of the endpoint to retrieve inpatient charges.
     * 
     * @param state the stateAbbreviation URL parameter 
     * @param city the city URL parameter
     * @param drgId the DRG ID URL parameter
     * @return the URL to find inpatient charges
     */
    public getInpatientChargesOperativeUrl(state: string, city: string, drgId: number): Observable<string> {
        return this.getEndpointUrl("Inpatient Charges")
            .pipe(map(url => url.substring(0, url.indexOf("{"))
                .concat(state).concat("/").concat(city).concat("/").concat(drgId.toString())));
    }

    /**
     * Returns the appropriate response object details for the 
     * given endpoint title.
     * 
     * @param title the endpoint title
     * @return the response description
     */
    public getResponseObjectDetails(title: string): any {
        if (title === "Diagnosis-Related Groups") {
            return this.getDrgDescription();
        } else if (title === "Ambulatory Payment Classifications") {
            return this.getApcDescription();
        } else if (title === "Inpatient Charges") {
            return this.getInpatientChargeDescription();
        } else if (title === "Outpatient Charges") {
            return this.getOutpatientChargeDescription();
        } else {
            return null;
        }
    }

    /**
     * Returns the appropriate response object name for the 
     * given endpoint title.
     * 
     * @param title the endpoint title
     * @return the object name for the endpoint
     */
    public getResponseObjectName(title: string): any {
        if (title === "Diagnosis-Related Groups") {
            return "DiagnosisRelatedGroup";
        } else if (title === "Ambulatory Payment Classifications") {
            return "AmbulatoryPaymentClassification";
        } else if (title === "Inpatient Charges") {
            return "InpatientCharge";
        } else if (title === "Outpatient Charges") {
            return "OutpatientCharge";
        } else {
            return null;
        }
    }

    /**
     * Returns the charge description for inpatient procedures.
     * 
     * @return the charge description
     */
    public getInpatientChargeDescription(): InpatientChargeDescription {
        return new InpatientChargeDescription("string", "string", "number", "number", "number");
    }

    /**
     * Returns the charge description for outpatient procedures.
     * 
     * @return the charge description
     */
    public getOutpatientChargeDescription(): OutpatientChargeDescription {
        return new OutpatientChargeDescription("string", "string", "number", "number");
    }

    /**
     * Returns the diagnosis-related group object description.
     * 
     * @return  the diagnosis-related group object description
     */
    public getDrgDescription(): DrgDescription {
        return new DrgDescription("number", "string");
    }

    /**
     * Returns the ambulatory payment classification object description.
     * 
     * @return  the ambulatory payment classification object description
     */
    public getApcDescription(): ApcDescription {
        return new ApcDescription("number", "string");
    }

    /**
     * Fetches endpoint data from the endpoints.json file.
     * 
     * @return the list of endpoints
     */
    public getEndpoints(): Observable<Array<Endpoint>> {
        return this.http.get<Endpoint[]>("./assets/endpoints.json");
    }
}
