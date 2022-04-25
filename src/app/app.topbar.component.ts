import { Component, OnDestroy } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { Subscription } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items: MenuItem[];

    constructor(public appMain: AppMainComponent,private token:TokenStorageService) {
       
     }
     sign_out(){
        this.token.signOut();
        window.location.href="/#/login";
     }
}
