import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployesService } from 'src/app/services/employes.service';
import { Employee } from 'src/app/modals/employee';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedUser;

  constructor(private router: Router, private employeService: EmployesService) { }

  ngOnInit() {
    const login = localStorage.getItem('login');
    this.employeService.getByLogin(login).subscribe(data => {
      this.loggedUser = data;
    }, error => {
      this.router.navigate(['/login']);
    });
  }

  logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('connected');
    this.router.navigate(['/login']);
  }

}
