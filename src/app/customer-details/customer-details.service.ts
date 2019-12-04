import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomersI } from '../customers/customers';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {

  private _url: string = "https://tcms-customers-d2.herokuapp.com/api/v1/customers/";
  private _uri = "";

  constructor(private http: HttpClient, private route: ActivatedRoute){
    console.log(this._url + this.route.snapshot.paramMap.get("id"))
  }

    getCustomer(): Observable<CustomersI>{
         this._uri = this._url + this.route.snapshot.paramMap.get("id")
        return this.http.get<CustomersI>(this._uri);
    }
}
