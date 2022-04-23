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
 
     this.usersUrl = 'http://192.168.0.127:8080/decharges_sn';
 
   }
 
   public findAll(): Observable<DechargeSn[]> {
     return this.http.get<DechargeSn[]>(this.usersUrl);
   }
 
}
