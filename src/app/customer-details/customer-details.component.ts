import { Component, OnInit } from '@angular/core';
import { CustomerDetailsService } from './customer-details.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public customer = {};

  constructor(private _customerDetailsService: CustomerDetailsService) { }

  ngOnInit() {
    this._customerDetailsService.getCustomer()
    .subscribe(data => this.customer = data)
  }

}
