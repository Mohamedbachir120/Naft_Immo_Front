import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Bien } from '../models/bien';

@Injectable({
  providedIn: 'root'
})
export class BienServiceService {
  private usersUrl!: string;




 constructor(private http: HttpClient) {

    this.usersUrl = 'http://192.168.0.127:8080/all_bien';

  }

  public findAll(): Observable<Bien[]> {
    return this.http.get<Bien[]>(this.usersUrl);
  }

}