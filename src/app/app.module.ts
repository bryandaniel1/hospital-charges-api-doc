import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table'
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InpatientEndpointsComponent } from './components/inpatient-endpoints/inpatient-endpoints.component';
import { OutpatientEndpointsComponent } from './components/outpatient-endpoints/outpatient-endpoints.component';
import { EndpointService } from './services/endpoint.service';
import { EndpointDisplayComponent } from './components/endpoint-display/endpoint-display.component';
import { ExampleComponent } from './components/example/example.component';
import { ExampleRequestResponseComponent } from './components/example-request-response/example-request-response.component';
import { ExampleService } from './services/example.service';

@NgModule({
  declarations: [
    AppComponent,
    InpatientEndpointsComponent,
    OutpatientEndpointsComponent,
    EndpointDisplayComponent,
    ExampleComponent,
    ExampleRequestResponseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [
    EndpointService,
    ExampleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
