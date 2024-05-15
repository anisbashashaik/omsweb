import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }

  signup(data: any) {
    console.log(data);
    return this.httpClient.post(this.baseUrl + '/yfsuser/signup', data, {
      headers : new HttpHeaders().set( 'Content-Type', 'application/json')
    });
  }

  forgotPassword(data: any) {
    console.log(data);
    return this.httpClient.post(this.baseUrl + '/yfsuser/forgotPassword', data, {
      headers : new HttpHeaders().set( 'Content-Type', 'application/json')
    });
  }

  login(data: any) {
    console.log(data);
    return this.httpClient.post(this.baseUrl + '/yfsuser/login', data, {
      headers : new HttpHeaders().set( 'Content-Type', 'application/json')
    });
  }

  checkToken(){
    return this.httpClient.get(this.baseUrl + '/yfsuser/checkToken');
  }

  changePassword(data: any) {
    console.log(data);
    return this.httpClient.post(this.baseUrl + '/yfsuser/changePassword', data, {
      headers : new HttpHeaders().set( 'Content-Type', 'application/json')
    });
  }

  getUsers(){
    return this.httpClient.get(this.baseUrl + "/yfsuser/get");
  }

  update(data:any){
    return this.httpClient.post(this.baseUrl + '/yfsuser/update', data, {
      headers : new HttpHeaders().set( 'Content-Type', 'application/json')
    });
  }

}
