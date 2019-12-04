import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomersI } from './customers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CustomersService {

  private _url: string = "https://tcms-customers-d2.herokuapp.com/api/v1/customers";
    constructor(private http: HttpClient){}

    getCustomers(): Observable<CustomersI[]>{
        return this.http.get<CustomersI[]>(this._url);
    }
}
