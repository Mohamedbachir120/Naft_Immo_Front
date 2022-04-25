import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TokenStorageService } from './_services/token-storage.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    menuMode = 'static';
    constructor(private primengConfig: PrimeNGConfig,private token:TokenStorageService) { }

    ngOnInit() {

        this.primengConfig.ripple = true;
        document.documentElement.style.fontSize = '14px';
    }
}
