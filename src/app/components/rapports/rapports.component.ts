import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { EmployesService } from 'src/app/services/employes.service';
import { Router } from '@angular/router';



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
  constructor(private employeService: EmployesService, private router: Router) { }

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
    this.chartOptions = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      subtitle: {
        text: 'subtitle'
      },
      /*xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total fruit consumption'
        }
      },*/
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
          name: 'Tokyo',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        },
        {
          name: 'New York',
          data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        },
        {
          name: 'Berlin',
          data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        },
        {
          name: 'London',
          data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }
      ]
    };


    this.chartOptions2 = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Linechart'
      },
      subtitle: {
        text: 'subtitle'
      },
      /*xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total fruit consumption'
        }
      },*/
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
          name: 'Tokyo',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2]
        }
      ]
    };

    this.chartOptions3 = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Linechart'
      },
      subtitle: {
        text: 'subtitle'
      },
      /*xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total fruit consumption'
        }
      },*/
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
          name: 'Tokyo',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }
      ]
    };

  }


}
