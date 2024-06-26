import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url = environment.BASIC_URL;
  constructor(private httpClient: HttpClient) { }

  getDetails(){
    return this.httpClient.get(this.url+"dashboard/details");
  }
}
