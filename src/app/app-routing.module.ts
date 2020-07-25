import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InpatientEndpointsComponent } from './components/inpatient-endpoints/inpatient-endpoints.component';
import { OutpatientEndpointsComponent } from './components/outpatient-endpoints/outpatient-endpoints.component';
import { ExampleComponent } from './components/example/example.component';

/**
 * The array of routes for the application
 */
const routes: Routes = [
  { path: 'inpatient', component: InpatientEndpointsComponent },
  { path: 'outpatient', component: OutpatientEndpointsComponent },
  { path: 'example', component: ExampleComponent },
  { path: '', pathMatch: 'full', redirectTo: '/inpatient' }
];

/**
 * Establishes the routes for the API doc
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
