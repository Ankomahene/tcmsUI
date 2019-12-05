import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomersService } from '../customers/customers.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  newCustomerForm = new FormGroup({
    customer_id: new FormControl(0),
    customer_name: new FormControl(''),
    customer_address: new FormControl(''),
    customer_email: new FormControl(''),
    customer_telephone: new FormControl(),
    customer_level: new FormControl('')
  });

  constructor(private _customerService: CustomersService) { }

  ngOnInit() {
  }

  onSubmit(){
    this._customerService.addNewCustomer(this.newCustomerForm.value)
    .subscribe(console.log)
  }

}
