import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DechargeBien } from '../models/decharge-bien';

@Injectable({
  providedIn: 'root'
})
export class DechergeBienService {

  private usersUrl!: string;




  constructor(private http: HttpClient) {
 
     this.usersUrl = 'http://localhost:8080/decharges_bien';
 
   }
 
   public findAll(): Observable<DechargeBien[]> {
     return this.http.get<DechargeBien[]>(this.usersUrl);
   }
  

}
