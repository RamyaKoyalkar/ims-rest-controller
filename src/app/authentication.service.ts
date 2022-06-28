import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  saveDealer(dealer:Object):Observable<Object>
  {
    return this.http.post(`http://localhost:9095/ims/api/registerDealer`,dealer);
  }

  login(dealer:any):Observable<any>
  {
    return this.http.post(`http://localhost:9095/ims/api/loginDealer`,dealer);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
 
  logOut() {
    sessionStorage.removeItem('username')
  }

  getDealersList():Observable<any>{
    return this.http.get(`http://localhost:9095/ims/api/findAllDealers`);
  }
}
