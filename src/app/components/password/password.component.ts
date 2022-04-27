import { Component, Injectable, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styles:[`
    :host ::ng-deep .p-password input {
    width: 100%;
    padding:1rem;
    }

    :host ::ng-deep .pi-eye{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }

    :host ::ng-deep .pi-eye-slash{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
  `],
  providers: [MessageService]

})

@Injectable({
  providedIn: 'root'
})
export class PasswordComponent implements OnInit {

  form: any = {
    password: null,
    newpassword: null
  };
  constructor(private authservice:AuthService,private messageService:MessageService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

      this.authservice.change_password(this.form.password, this.form.newpassword).subscribe(

        data =>{
          console.log();  
          if(data.message=="success") {

            this.messageService.add({severity:'success', summary:'Infos', detail:'Mot de passe changé avec succès'});
          }else{
            this.messageService.add({severity:'error', summary:'Erreur', detail:'Ancien mot de passe incorrecte'});

          }

          
        },err =>{
          
          this.messageService.add({severity:'error', summary:'Erreur', detail:'Ancien mot de passe incorrecte'});


        }
      );
      
     
    }

}
