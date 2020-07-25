import { Component, OnInit, Input } from '@angular/core';
import { Endpoint } from 'src/app/models/endpoint.model';
import { MatTableDataSource } from '@angular/material/table';
import { EndpointService } from 'src/app/services/endpoint.service';

/**
 * Displays the information for an endpoint.
 */
@Component({
  selector: 'app-endpoint-display',
  templateUrl: './endpoint-display.component.html',
  styleUrls: ['./endpoint-display.component.css']
})
export class EndpointDisplayComponent implements OnInit {

  /**
   * The input data
   */
  @Input() endpointProperty: Endpoint;

  /**
   * Indicates whether or not additional response details are available.
   */
  public objectDetailsAvailable = false;

  /**
   * The name for the response object
   */
  public objectName: string;

  /**
   * The column headers
   */
  public columnHeaders = ['endpointInformation', 'value'];

  /**
   * The data for the table
   */
  public endpointData = new MatTableDataSource<[string, string]>();

  /**
   * The data for a response object
   */
  public responseObjectData = new MatTableDataSource<[string, string]>();

  /**
   * Sets the endpoint service.
   * 
   * @param endpointService the endpoint service
   */
  constructor(private endpointService: EndpointService) { }

  /**
   * Sets the values for the data to display
   */
  ngOnInit(): void {
    this.loadEndpointData();
    this.loadResponseObjectDescription();
  }

  /**
   * Loads the endpoint information to display.
   */
  private loadEndpointData() {
    let endpointDataArray = [];
    Object.entries(this.endpointProperty).forEach(entry => {
      endpointDataArray.push({ "endpointInformation": entry[0], "value": entry[1] });
    });
    this.endpointData.data = endpointDataArray;
  }

  /**
   * Loads the response object information to display.
   */
  private loadResponseObjectDescription() {
    let objectData = this.endpointService.getResponseObjectDetails(this.endpointProperty.title);
    if (objectData) {
      this.objectDetailsAvailable = true;
      this.objectName = this.endpointService.getResponseObjectName(this.endpointProperty.title);
      let responseObjectDataArray = [];
      Object.entries(objectData).forEach(entry => {
        responseObjectDataArray.push({ "endpointInformation": entry[0], "value": entry[1] });
      });
      this.responseObjectData.data = responseObjectDataArray;
    } else {
      this.objectDetailsAvailable = false;
    }
  }
}
