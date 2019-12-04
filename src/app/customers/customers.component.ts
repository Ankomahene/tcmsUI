import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {

  // Math.floor(Math.random() * 5);
  
  public customers = [];

  constructor(private _customerService: CustomersService) { }

  ngOnInit() {
    this._customerService.getCustomers()
    .subscribe(data => this.customers = data )
  }

}
