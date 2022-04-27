import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from '../../service/app.config.service';
import { AppConfig } from '../../api/appconfig';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
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
export class LoginComponent implements OnInit, OnDestroy {

  form: any = {
    username: null,
    password: null
  };
  valCheck: string[] = ['remember'];

  password: string;
  
  config: AppConfig;
  
  subscription: Subscription;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];


  constructor(private messageService:MessageService,private token:TokenStorageService, private router: Router,public configService: ConfigService,private authService: AuthService, private tokenStorage: TokenStorageService){ }

  ngOnInit(): void {
  
  
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
    });
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.messageService.add({severity:'error', summary:'Erreur', detail:'Nom ou mot de passe incorrecte'});



      }
    );
  }

  reloadPage(): void {
    let tab = this.token.getUser().roles;

    if(tab.includes("ROLE_ADMIN")){

      window.location.href="/#/";
    }else{
      
      window.location.href ="/#/ChoixCentre";
    }
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
