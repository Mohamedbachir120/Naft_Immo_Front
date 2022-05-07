import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localite } from '../models/localite';
import { TokenStorageService } from '../_services/token-storage.service';
const SELECTED_CENTER = "selected-center"

@Injectable({
  providedIn: 'root'
})
export class LocaliteService {

 
  private usersUrl!: string;
  private localite_par_centre!:string; 




  constructor(private http: HttpClient,private token:TokenStorageService) {
 
     this.usersUrl = 'http://10.96.3.21:8080/naftimobackend/localite';
      this.localite_par_centre ="http://10.96.3.21:8080/naftimobackend/localite_par_centre";
   }
 
   public findAll(): Observable<Localite[]> {
    
    let tab: any[]; 
    tab = this.token.getUser().roles;

      if(tab.includes("ROLE_ADMIN")){

        return this.http.get<Localite[]>(this.usersUrl);
      }else{
        let  centre = window.sessionStorage.getItem(SELECTED_CENTER);
        return this.http.get<Localite[]>(this.localite_par_centre+"/"+centre.trim());
        
      }

   }

}
