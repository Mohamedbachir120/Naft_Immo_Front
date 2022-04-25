import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
             
            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public appMain: AppMainComponent,private token:TokenStorageService) { }

    ngOnInit() {
        let tab = this.token.getUser().roles;
        if(tab.includes("ROLE_ADMIN")){
        this.model = [
            {
                label: 'Home',
                items:[
                    {label: 'Dashboard',icon: 'pi pi-fw pi-chart-bar', routerLink: ['/']},
                    {label: 'Localités',icon: 'pi pi-fw pi-home', routerLink: ['/localites']},
                    {label: "Equipes d'inventaire",icon: 'pi pi-fw pi-users', routerLink: ['/equipes']},
                    {label: 'Articles',icon: 'pi pi-fw pi-book', routerLink: ['/biens']},
                    {label: 'Articles SN',icon: 'pi pi-fw pi-book', routerLink: ['/SN']},
                    {label: "Affectation d'articles ",icon: 'pi pi-fw pi-table', routerLink: ['/decharge_bien']},
                    {label: "Affectation d'articles SN",icon: 'pi pi-fw pi-table', routerLink: ['/decharge_sn']},
                    {label: "Mot de passe",icon: 'pi pi-fw pi-lock', routerLink: ['/password']},

                ]
            },   
        ];
    }
        else{
            this.model = [
                {
                    label: 'Home',
                    items:[
                        {label: 'Dashboard',icon: 'pi pi-fw pi-chart-bar', routerLink: ['/']},
                        {label: 'Localités',icon: 'pi pi-fw pi-home', routerLink: ['/localites']},
                        {label: "Equipes d'inventaire",icon: 'pi pi-fw pi-users', routerLink: ['/equipes']},
                        {label: 'Articles',icon: 'pi pi-fw pi-book', routerLink: ['/biens']},
                        {label: 'Articles SN',icon: 'pi pi-fw pi-book', routerLink: ['/SN']},
                        {label: "Mot de passe",icon: 'pi pi-fw pi-lock', routerLink: ['/password']},
              
                    ]
                },   
            ];

        }
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
