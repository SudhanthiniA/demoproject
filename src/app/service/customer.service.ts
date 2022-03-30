import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
    // return this.http.get("https://61bb47cbe943920017784d9f.mockapi.io/registration");
  }
}
