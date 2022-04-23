import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Sn } from '../models/sn';
import { AnyObject } from 'chart.js/types/basic';

@Injectable({
  providedIn: 'root'
})
export class SnService {
  private usersUrl!: string;
  private statUrl!:string;






 constructor(private http: HttpClient) {

    this.usersUrl = 'http://192.168.0.127:8080/all_non_etiqu';
    this.statUrl = 'http://192.168.0.127:8080/stat_SN';
    

  }

  public findAll(): Observable<Sn[]> {
    return this.http.get<Sn[]>(this.usersUrl);
  }
  public stat_SN():Observable<AnyObject[]>{
    return this.http.get<AnyObject[]>(this.statUrl);
  }

}