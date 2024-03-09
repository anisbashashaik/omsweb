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

}
