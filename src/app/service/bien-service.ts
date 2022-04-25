import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Bien } from '../models//bien';
import { AnyObject } from 'chart.js/types/basic';
import { TokenStorageService } from '../_services/token-storage.service';
const SELECTED_CENTER = "selected-center"

@Injectable({
  providedIn: 'root'
})
export class BienServiceService {
  private usersUrl!: string;
  private statUrl!: string;
  
  private statParCentreUrl!:string;
  bien_par_centre: string;
  stat_bien_par_centre:string;





 constructor(private http: HttpClient,private token:TokenStorageService) {

    this.usersUrl = 'http://localhost:8080/all_bien';
    this.bien_par_centre ='http://localhost:8080/bien_par_centre';
    this.statUrl = 'http://localhost:8080/stat_bien';
    this.statParCentreUrl = "http://localhost:8080/stat_par_structure"
    this.stat_bien_par_centre ="http://localhost:8080/stat_bien_par_centre"

  }

  public findAll(): Observable<Bien[]> {
  
    let tab = this.token.getUser().roles;
    if(tab.includes("ROLE_ADMIN")){


      return this.http.get<Bien[]>(this.usersUrl);
    } else{

      let  centre = window.sessionStorage.getItem(SELECTED_CENTER);

      return this.http.get<Bien[]>(this.bien_par_centre+"/"+centre.trim());

    }
  }
  public Stat():Observable<AnyObject[]>{
    let tab = this.token.getUser().roles;
    if(tab.includes("ROLE_ADMIN")){
    return this.http.get<AnyObject[]>(this.statUrl);
    }else{
      let  centre = window.sessionStorage.getItem(SELECTED_CENTER);
      return this.http.get<AnyObject[]>(this.stat_bien_par_centre+"/"+centre.trim());

    }
    
  }
  public stat_par_centre():Observable<AnyObject[]>{

      return this.http.get<AnyObject[]>(this.statParCentreUrl);
  }

}