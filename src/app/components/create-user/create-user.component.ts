import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  providers: [MessageService]

})
export class CreateUserComponent implements OnInit {

  constructor(private authService:AuthService,private userservice:UserService,private messageService:MessageService) { }

  form: any = {
    username: null,
    access: null
  };
  loading = true;
  users:any[];
  centres : any[];
  ngOnInit(): void {
    this.userservice.findCentres().subscribe(
      
    data => {
      
        this.centres = data;


    });
    this.authService.users().subscribe(
      data =>{
        this.loading = false;
        this.users = data;
      }
    );
  }
  onSubmit():void{  

;

    
    if(this.form.username == null || this.form.access == null)
    {
      this.messageService.add({severity:'error', summary:'Erreur', detail:'Veuilez remplir tous les champs'});
    }else{
      

      this.authService.register(this.form.username,this.form.username.replace(" ","")+"@gmail.com","a",this.form.access.join(',')).subscribe(

        data =>{
          this.messageService.add({severity:'success', summary:'Infos', detail:'Utilisateur créer avec succès'});
          
        },
        err => {
      this.messageService.add({severity:'error', summary:'Erreur', detail:'Utilisateur existe déjà'});

        }
      );



    }
  }

}
