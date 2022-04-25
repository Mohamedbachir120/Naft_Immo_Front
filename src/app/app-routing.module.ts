import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppMainComponent } from './app.main.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AccessComponent } from './components/access/access.component';
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
                
                    

                    

                ],
            },
            {path: 'ChoixCentre', component: ChoixCentreComponent,canActivate:[LoginActivate]},

            {path:'pages/landing', component: LandingComponent},
            {path:'login', component: LoginComponent,canActivate:[LogoutActivate]},
            {path:'pages/error', component: ErrorComponent},
            {path:'pages/notfound', component: NotfoundComponent},
            {path:'pages/access', component: AccessComponent},
            {path: '**', redirectTo: 'pages/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
