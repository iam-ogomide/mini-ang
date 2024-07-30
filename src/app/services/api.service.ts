import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../../types';

//GET request to get each of the products in the database
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    //this service can be used to make rest API calls to a specific url
    private httpClient : HttpClient,
  ) {}

  //we are invoking the http client, then we are calling a get on the http client, then we are declearing a type[A method basically to communicate with our server]
  get<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }
}
