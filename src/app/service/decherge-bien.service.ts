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
 
     this.usersUrl = 'http://10.96.3.21:8080/naftimobackend/decharges_bien';
 
   }
 
   public findAll(): Observable<DechargeBien[]> {
     return this.http.get<DechargeBien[]>(this.usersUrl);
   }
  

}
