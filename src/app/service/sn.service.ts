import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Sn } from '../models/sn';
import { AnyObject } from 'chart.js/types/basic';
import { TokenStorageService } from '../_services/token-storage.service';
const SELECTED_CENTER = "selected-center"

@Injectable({
  providedIn: 'root'
})
export class SnService {
  private usersUrl!: string;
  private statUrl!:string;
  private sn_par_centre!:string;

  private stat_sn_par_centre!:string;





 constructor(private http: HttpClient,private token: TokenStorageService ) {

    this.usersUrl = 'http://10.96.3.21:8080/naftimobackend/all_non_etiqu';
    this.sn_par_centre = 'http://10.96.3.21:8080/naftimobackend/non_etiqu_by_centre'
    this.statUrl = 'http://10.96.3.21:8080/naftimobackend/stat_SN';
    this.stat_sn_par_centre = 'http://10.96.3.21:8080/naftimobackend/stat_sn_par_centre'
    

  }

  public findAll(): Observable<Sn[]> {

    let tab = this.token.getUser().roles;
    if(tab.includes("ROLE_ADMIN")){


      return this.http.get<Sn[]>(this.usersUrl);
    } else{

      let  centre = window.sessionStorage.getItem(SELECTED_CENTER);

      return this.http.get<Sn[]>(this.sn_par_centre+"/"+centre.trim());

    }
  }
  public stat_SN():Observable<AnyObject[]>{
    let tab = this.token.getUser().roles;
    if(tab.includes("ROLE_ADMIN")){

    return this.http.get<AnyObject[]>(this.statUrl);
    }else{
      let  centre = window.sessionStorage.getItem(SELECTED_CENTER);

      return this.http.get<AnyObject[]>(this.stat_sn_par_centre+"/"+centre.trim());

    }
    }

}