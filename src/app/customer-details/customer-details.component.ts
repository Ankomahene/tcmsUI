import { Component, OnInit } from '@angular/core';
import { CustomerDetailsService } from './customer-details.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CustomersI } from '../customers/customers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public customer = {};
  public customerId;
  private _url: string = "https://tcms-customers-d2.herokuapp.com/api/v1/customers/";

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    console.log("Id", id);
    this.customerId = id;

    this.getCustomer()
    .subscribe(data => {
      this.customer = data;
      console.log(data)
    });
  }

  getCustomer(): Observable<CustomersI>{
    this._url = this._url + this.customerId
    return this.http.get<CustomersI>(this._url);
  }

}
