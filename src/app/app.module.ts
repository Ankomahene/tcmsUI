import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReportsComponent } from './reports/reports.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ProjectsComponent,
    ReportsComponent,
    NavComponent,
    HomeComponent,
    NewCustomerComponent,
    NewProjectComponent,
    CustomerDetailsComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
