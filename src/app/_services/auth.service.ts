import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  change_password(password :string,newpassword:string):Observable<any>{
    
    return this.http.post("http://localhost:8080/change_password",
    {
      password,
      newpassword
    },
    httpOptions
    );
  }

  register(username: string, email: string, password: string,access:string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      access
    }, httpOptions);
  }

  users(): Observable<any[]> {
    return this.http.get<any[]>(AUTH_API + 'users', {});
  }
}
