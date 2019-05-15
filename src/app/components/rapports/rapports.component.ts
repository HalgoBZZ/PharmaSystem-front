import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { EmployesService } from 'src/app/services/employes.service';
import { Router } from '@angular/router';
import { FacturesService } from 'src/app/services/factures.service';



@Component({
  selector: 'app-rapports',
  templateUrl: './rapports.component.html',
  styleUrls: ['./rapports.component.css']
})
export class RapportsComponent implements OnInit {
  chart;
  chart2;
  chart3;
  chartOptions;
  chartOptions2;
  chartOptions3;
  loggedUser;
  constructor(private employeService: EmployesService, private router: Router, private factureService: FacturesService) { }

  ngOnInit() {
    const login = localStorage.getItem('login');
    this.employeService.getByLogin(login).subscribe(data => {
      if (data == null) {
        this.router.navigate(['/login']);
      }
      this.loggedUser = data;
    }, error => {
      this.router.navigate(['/login']);
    });
    this.chart = Highcharts;
    this.chart2 = Highcharts;
    this.chart3 = Highcharts;
    // this.chartOptions = {
    //   chart: {
    //     type: 'line'
    //   },
    //   title: {
    //     text: 'Linechart'
    //   },
    //   subtitle: {
    //     text: 'subtitle'
    //   },
    //   /*xAxis: {
    //     categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    //   },
    //   yAxis: {
    //     min: 0,
    //     title: {
    //       text: 'Total fruit consumption'
    //     }
    //   },*/
    //   legend: {
    //     reversed: true
    //   },
    //   plotOptions: {
    //     series: {
    //       stacking: 'vente'
    //     }
    //   },
    //   series: [
    //     {
    //       name: 'Tokyo',
    //       data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    //     },
    //     {
    //       name: 'New York',
    //       data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    //     },
    //     {
    //       name: 'Berlin',
    //       data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    //     },
    //     {
    //       name: 'London',
    //       data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    //     }
    //   ]
    // };


    this.chartOptions2 = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Nombre des achats par mois'
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: [
        {
          name: 'Achat',
          // data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
          data: [
            ['Janvier', 18],
            ['fevrier', 14],
            ['Mars', 11],
            ['Avril', 10],
            ['Mais', 8],
            ['Juin', 7],
            ['Jouillet', 7],
            ['Aout', 5],
            ['Septembre', 7],
            ['Octobre', 3],
            ['Novembre', 9],
            ['Decembre', 10]
        ]
        }
      ]
    };

    this.chartOptions3 = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Nombre de ventes par mois'
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      xAxis: {
        categories: ['Janvier', 'fevrier', 'Mars',
        'Avril', 'Mais', 'Juin', 'Jouillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
    },
      series: [
        {
          name: 'Ventes',
          data: [
            ['Janvier', 18],
            ['fevrier', 14],
            ['Mars', 11],
            ['Avril', 10],
            ['Mais', 8],
            ['Juin', 7],
            ['Jouillet', 7],
            ['Aout', 5],
            ['Septembre', 7],
            ['Octobre', 3],
            ['Novembre', 9],
            ['Decembre', 10]
        ]
         // data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }
      ]
    };

    this.factureService.getAllFactures().subscribe( data => {
      const factures: any = data;
      // this.chartOptions = {
      //   chart: {
      //     type: 'line'
      //   },
      //   title: {
      //     text: 'Nombre de ventes par mois'
      //   },
      //   subtitle: {
      //     text: 'subtitle'
      //   },
      //   legend: {
      //     reversed: true
      //   },
      //   plotOptions: {
      //     series: {
      //       stacking: 'vente'
      //     }
      //   },
      //   series: [
      //     {
      //       name: '1',
      //       data: [1, 5, 9, 5, 7]
      //     },
      //     {
      //       name: '2',
      //       data: [1, 5, 3, 5, 7]
      //     },
      //     {
      //       name: '3',
      //       data: [1, 12, 3, 5, 7]
      //     },
      //     {
      //       name: '4',
      //       data: [1, 52, 3, 5, 7]
      //     },
      //     {
      //       name: '5',
      //       data: [1, 5, 33, 55, 7]
      //     },
      //     {
      //       name: '6',
      //       data: [1, 5, 3, 57, 7]
      //     },
      //     {
      //       name: '7',
      //       data: [11, 5, 31, 55, 7]
      //     },
      //     {
      //       name: '8',
      //       data: [1, 45, 3, 5, 7]
      //     },
      //     {
      //       name: '9',
      //       data: [11, 5, 300, 5, 7]
      //     },
      //     {
      //       name: '10',
      //       data: [1, 5, 3, 55, 71]
      //     },
      //     {
      //       name: '11',
      //       data: [18, 56, 37, 56, 78]
      //     },
      //     {
      //       name: '12',
      //       data: [10, 45, 30, 52, 79]
      //     }
      //   ]
      // };
    });
  }


}
