import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DechargeSn } from '../models/decharge-sn';

@Injectable({
  providedIn: 'root'
})
export class DechargeSnService {

  
  private usersUrl!: string;




  constructor(private http: HttpClient) {
 
     this.usersUrl = 'http://10.96.3.21:8080/naftimobackend/decharges_sn';
 
   }
 
   public findAll(): Observable<DechargeSn[]> {
     return this.http.get<DechargeSn[]>(this.usersUrl);
   }
 
}
