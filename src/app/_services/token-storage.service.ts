import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const TOKEN_EXPIRATION = "token-expiration"; 


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(TOKEN_EXPIRATION);

    window.sessionStorage.setItem(TOKEN_KEY, token);
    window.sessionStorage.setItem(TOKEN_EXPIRATION,new Date(new Date().getTime() + (1000 * 60 * 60 * 24)).toString());
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public isAuthenticated():boolean{
    let expiration :any ;
    if(window.sessionStorage.getItem(TOKEN_EXPIRATION) == null){
     return false;
   }else{
     expiration = new Date(window.sessionStorage.getItem(TOKEN_EXPIRATION)!);
     if(new Date() >= expiration){
       return false;
     }
     return true;
   }


  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
