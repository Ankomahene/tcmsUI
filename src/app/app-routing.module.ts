import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {CustomersComponent} from "./customers/customers.component";
import {ProjectsComponent} from "./projects/projects.component"
import { ReportsComponent } from './reports/reports.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: AuthComponent},
  {path: "index", component: HomeComponent},
  {path: "customers", component: CustomersComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "reports", component: ReportsComponent},
  {path: "new_customer", component: NewCustomerComponent},
  {path: "new_project", component: NewProjectComponent},
  {path: "customers/:id", component: CustomerDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
