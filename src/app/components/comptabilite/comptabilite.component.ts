import { Component, OnInit } from '@angular/core';
import { EmployesService } from 'src/app/services/employes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comptabilite',
  templateUrl: './comptabilite.component.html',
  styleUrls: ['./comptabilite.component.css']
})
export class ComptabiliteComponent implements OnInit {
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
  }

}
