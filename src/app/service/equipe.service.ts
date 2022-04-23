import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Equipe } from '../models/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private usersUrl!: string;




 constructor(private http: HttpClient) {

    this.usersUrl = 'http://192.168.0.127:8080/equipe';

  }

  public findAll(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.usersUrl);
  }

}