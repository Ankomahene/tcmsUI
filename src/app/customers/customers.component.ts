import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {

  searchForm = new FormGroup({
    customer_name: new FormControl('')
  });

  public customers = [];

  constructor(private _customerService: CustomersService) { }

  ngOnInit() {
    this._customerService.getCustomers()
    .subscribe(data => this.customers = data )
  }

  onSubmit(){
    this._customerService.searchCustomerByName(this.searchForm.value.customer_name)
    .subscribe(cus => {
      this.customers = cus
      console.log(cus)
    })
  }

}
