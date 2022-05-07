import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Equipe } from '../models/equipe';
import { TokenStorageService } from '../_services/token-storage.service';

const SELECTED_CENTER = "selected-center"

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private usersUrl!: string;
  private urlParCentre!:string;




 constructor(private http: HttpClient,private token:TokenStorageService) {

    this.usersUrl = 'http://10.96.3.21:8080/naftimobackend/equipe';
    this.urlParCentre ='http://10.96.3.21:8080/naftimobackend/equipe_par_centre'
  }

  public findAll(): Observable<Equipe[]> {
    let tab = this.token.getUser().roles;
    if(tab.includes("ROLE_ADMIN")){


      return this.http.get<Equipe[]>(this.usersUrl);
    } else{

      let  centre = window.sessionStorage.getItem(SELECTED_CENTER);

      return this.http.get<Equipe[]>(this.urlParCentre+"/"+centre.trim());

    }
  }

}