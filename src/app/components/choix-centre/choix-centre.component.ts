import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api/selectitem';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
const SELECTED_CENTER = "selected-center"

@Component({
  selector: 'app-choix-centre',
  templateUrl: './choix-centre.component.html',
   styles: [`:host ::ng-deep .p-multiselect {
		min-width: 15rem;
	}

	:host ::ng-deep .multiselect-custom-virtual-scroll .p-multiselect {
		min-width: 20rem;
	}

	:host ::ng-deep .multiselect-custom .p-multiselect-label,  {
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;

	}

	:host ::ng-deep .multiselect-custom .country-item.country-item-value {
		padding: .25rem .5rem;
		border-radius: 3px;
		display: inline-flex;
		margin-right: .5rem;
		background-color: var(--primary-color);
		color: var(--primary-color-text);
	}

	:host ::ng-deep .multiselect-custom .country-item.country-item-value img.flag {
		width: 17px;
	}

	:host ::ng-deep .multiselect-custom .country-item {
		display: flex;
		align-items: center;
	}

	:host ::ng-deep .multiselect-custom .country-item img.flag {
		width: 18px;
		margin-right: .5rem;
	}

	:host ::ng-deep .multiselect-custom .country-placeholder {
		padding: 0.25rem;
	}

    `]
})
export class ChoixCentreComponent implements OnInit {

  centres: string[];
  centre :string ;

  constructor(private _router:Router,private token:TokenStorageService) { }

  form: any = {
    centre: null,
  };
  ngOnInit(): void {
	
  
	this.centres	= this.token.getUser().access.split(",");
	this.centre = this.centres[0];
  }
  onSubmit(): void {

	window.sessionStorage.removeItem(SELECTED_CENTER);
	window.sessionStorage.setItem(SELECTED_CENTER,this.centre);

	this.reloadPage();


   
  }

  reloadPage(): void {

	this._router.navigate(['']);

	
  }


}
