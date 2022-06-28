import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// > ng generate service product
/**
 * Angular makes use of observables as an interface to handle a variety of common 
 * asynchronous operations.
 * You can define custom events that send observable output data from a child to a parent component.
The HTTP module uses observables to handle AJAX requests and responses.
The Router and Forms modules use observables to listen for and respond to user-input events.
 */

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  //URL which returns REST API
  baseUrl='http://localhost:9095/ims/api/products';

  constructor(private http:HttpClient) { }

  getProductList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
   
  getProduct(id:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  newProduct(product:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,product);
  }

  updateProduct(id:string,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }
  deleteProduct(id:string):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'})
  }
}
