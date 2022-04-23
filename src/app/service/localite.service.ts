import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localite } from '../models/localite';

@Injectable({
  providedIn: 'root'
})
export class LocaliteService {

 
  private usersUrl!: string;




  constructor(private http: HttpClient) {
 
     this.usersUrl = 'http://192.168.0.127:8080/localite';
 
   }
 
   public findAll(): Observable<Localite[]> {
     return this.http.get<Localite[]>(this.usersUrl);
   }

}
