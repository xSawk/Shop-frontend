import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode'


@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }


  setToken(token: string){
    localStorage.setItem("token",token);
  }

  getToken(): string | null{
    return localStorage.getItem("token");
  }

  isLoggedIn(): boolean {
      let token = localStorage.getItem("token");
  
      return token != null && this.isExpired(token);
  }

  isExpired(token: string): boolean{

    let decodedToken = jwt_decode<any>(token);
    return (decodedToken.exp * 1000) > new Date().getTime(); 
  }

 

}
