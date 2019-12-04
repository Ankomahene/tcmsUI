import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers/customers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public customers = [];

  constructor(private _customerService: CustomersService) { }

  ngOnInit() {
    this._customerService.getCustomers()
    .subscribe(data => this.customers = data)
  }

}
