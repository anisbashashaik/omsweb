import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environment.BASIC_URL;
  constructor(private httpClient: HttpClient) { }

  add(data:any){
    return this.httpClient.post(this.url + "product/add", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  update(data:any){
    return this.httpClient.post(this.url + "product/update", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  getProducts(){
    return this.httpClient.get(this.url + "product/get");
  }

  updateStatus(data:any){
    return this.httpClient.post(this.url + "product/updateStatus", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  delete (productId: any){
    return this.httpClient.post(this.url + "product/delete"+productId, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  getProductsByCategory(categoryId: any){
    return this.httpClient.get(this.url + "product/getByCategory/"+categoryId)
  }

  getProductById(productId: any){
    return this.httpClient.get(this.url + "product/getByProductId/"+productId)
  }
}
