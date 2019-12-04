import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})


export class CustomersComponent implements OnInit {

  public customers = [];

  constructor(private _customerService: CustomersService) { }

  ngOnInit() {
    this._customerService.getCustomers()
    .subscribe(data => console.log(data))
  }

}
