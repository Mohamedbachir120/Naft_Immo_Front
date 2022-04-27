import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppMainComponent } from './app.main.component';

import { LoginComponent } from './components/login/login.component';



import { BienListComponent } from './components/bien-list/bien-list.component';
import { SnListComponent } from './components/sn-list/sn-list.component';
import { EquipeListComponent } from './components/equipe-list/equipe-list.component';
import { LocaliteListComponent } from './components/localite-list/localite-list.component';
import { DechargesnListeComponent } from './components/dechargesn-liste/dechargesn-liste.component';
import { DechargebienListComponent } from './components/dechargebien-list/dechargebien-list.component';
import { LoginActivate } from './_helpers/LoginActivate';
import { LogoutActivate } from './_helpers/LogoutActivate';
import { ChoixCentreComponent } from './components/choix-centre/choix-centre.component';
import { PasswordComponent } from './components/password/password.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', component: DashboardComponent,canActivate:[LoginActivate]},
                    {path:'biens',component:BienListComponent,canActivate:[LoginActivate]},
                    {path:'SN',component:SnListComponent,canActivate:[LoginActivate]},
                    {path:'equipes',component:EquipeListComponent,canActivate:[LoginActivate]},
                    {path:'localites',component:LocaliteListComponent,canActivate:[LoginActivate]},
                    {path:'decharge_sn',component:DechargesnListeComponent,canActivate:[LoginActivate]},
                    {path:'decharge_bien',component:DechargebienListComponent,canActivate:[LoginActivate]},
                    {path:'password',component:PasswordComponent,canActivate:[LoginActivate]},
                    {path:'create_user',component:CreateUserComponent,canActivate:[LoginActivate]},
                
                    

                    

                ],
            },
            {path: 'ChoixCentre', component: ChoixCentreComponent,canActivate:[LoginActivate]},

            
            {path:'login', component: LoginComponent,canActivate:[LogoutActivate]},
            
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
