import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Bien } from '../models//bien';
import { AnyObject } from 'chart.js/types/basic';

@Injectable({
  providedIn: 'root'
})
export class BienServiceService {
  private usersUrl!: string;
  private statUrl!: string;





 constructor(private http: HttpClient) {

    this.usersUrl = 'http://192.168.0.127:8080/all_bien';
    this.statUrl = 'http://192.168.0.127:8080/stat_bien';

  }

  public findAll(): Observable<Bien[]> {
    return this.http.get<Bien[]>(this.usersUrl);
  }
  public Stat():Observable<AnyObject[]>{
    return this.http.get<AnyObject[]>(this.statUrl);
    
  }

}