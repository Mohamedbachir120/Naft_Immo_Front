import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/productservice';
import { Subscription } from 'rxjs';
import { ConfigService } from '../../service/app.config.service';
import { AppConfig } from '../../api/appconfig';
import { BienServiceService } from 'src/app/service/bien-service';
import { SnService } from 'src/app/service/sn.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
 
@Component({
    templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {

   
    items: MenuItem[];

    labels:String [];
    labelsSn:String [];

    values:number[];
    valuesSn:number[];

    isAdmin:boolean;

    centres :any[];

    chartData: any;
    chartDataSN: any;


    chartOptions: any;

    subscription: Subscription;

    config: AppConfig;

    constructor(private token:TokenStorageService,private snService:SnService,private bienService:BienServiceService, public configService: ConfigService) {
    }

    ngOnInit() {
        
        let tab = this.token.getUser().roles;
        this.isAdmin = tab.includes("ROLE_ADMIN");
        
        this.labels = [];
        this.labelsSn = [];
        this.values = [];
        this.valuesSn = [];
   

        this.bienService.Stat().subscribe(
            data =>{
                data.forEach(element => {
                  
                    switch(element[1]){
                        case 1:this.labels.push("Bon");break;
                        case 2:this.labels.push("Hors service");break;
                        case 3:this.labels.push("A réformer");break;
                    }
                    this.values.push(parseInt(element[0].toString()));
                   
                
                    
                    
                });
                this.chartData =  {
                    labels: this.labels,
                    datasets: [
                        {
                            data: this.values,
                            backgroundColor: [
                                "#FF6384",
                                "#36A2EB",
                                "#FFCE56"
                            ],
                            hoverBackgroundColor: [
                                "#FF6384",
                                "#36A2EB",
                                "#FFCE56"
                            ]
                        }
                    ]
                };
                
                
            }
        );

        this.snService.stat_SN().subscribe(
            data =>{
                data.forEach(element => {
                    console.log(element);
                    
                  
                    switch(element[1]){
                        case 1:this.labelsSn.push("Bon");break;
                        case 2:this.labelsSn.push("Hors service");break;
                        case 3:this.labelsSn.push("A réformer");break;
                    }
                    this.valuesSn.push(parseInt(element[0].toString()));
                   
                
                    
                    
                });
                this.chartDataSN =  {
                    labels: this.labelsSn,
                    datasets: [
                        {
                            data: this.valuesSn,
                            backgroundColor: [
                                "#FF6384",
                                "#36A2EB",
                                "#FFCE56"
                            ],
                            hoverBackgroundColor: [
                                "#FF6384",
                                "#36A2EB",
                                "#FFCE56"
                            ]
                        }
                    ]
                };
                
                
            }
        );
        this.bienService.stat_par_centre().subscribe(
            data =>{

                this.centres = data;
                
            }
        );

        

        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
            this.updateChartOptions();
        });

        


     

     
    }

    updateChartOptions() {
        if (this.config.dark)
            this.applyDarkTheme();
        else
            this.applyLightTheme();

    }

    applyDarkTheme() {
        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            }
        };
    }

    applyLightTheme() {
            this.chartOptions = {
                plugins: {
                    legend: {
                        labels: {
                            color: '#495057'
                        }
                    }
                }
        };
    }


}

