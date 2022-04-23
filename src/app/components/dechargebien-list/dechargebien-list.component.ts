import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Customer, Representative } from '../../api/customer';

import { Table } from 'primeng/table';
import { MessageService, ConfirmationService } from 'primeng/api'

import { DechargeBien } from 'src/app/models/decharge-bien';
import { DechergeBienService } from 'src/app/service/decherge-bien.service';
@Component({
  selector: 'app-dechargebien-list',
  templateUrl: './dechargebien-list.component.html',
  providers: [MessageService, ConfirmationService],
  styleUrls: ['../../../assets/demo/badges.scss'],
  styles: [`
      :host ::ng-deep  .p-frozen-column {
          font-weight: bold;
      }

      :host ::ng-deep .p-datatable-frozen-tbody {
          font-weight: bold;
      }

      :host ::ng-deep .p-progressbar {
          height:.5rem;
      }
  `]
})
export class DechargebienListComponent implements OnInit {


  biens!: DechargeBien[];


  customers3: Customer[];






  rowGroupMetadata: any;



  isExpanded: boolean = false;

  idFrozen: boolean = false;

  loading:boolean = true;

  @ViewChild('dt') table: Table;

  @ViewChild('filter') filter: ElementRef;

  constructor(private bienService:DechergeBienService) {}

  ngOnInit() {
    
       this.bienService.findAll().subscribe(data => {
          this.biens = data;
          this.loading = !this.loading;
          
          });
 

 
  }

  onSort() {
      this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
      this.rowGroupMetadata = {};

      if (this.customers3) {
          for (let i = 0; i < this.customers3.length; i++) {
              const rowData = this.customers3[i];
              const representativeName = rowData.representative.name;

              if (i === 0) {
                  this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
              }
              else {
                  const previousRowData = this.customers3[i - 1];
                  const previousRowGroup = previousRowData.representative.name;
                  if (representativeName === previousRowGroup) {
                      this.rowGroupMetadata[representativeName].size++;
                  }
                  else {
                      this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
                  }
              }
          }
      }
  }

  expandAll() {
      
      this.isExpanded = !this.isExpanded;
  }

  

  clear(table: Table) {
      table.clear();
      this.filter.nativeElement.value = '';
  }
}
