import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployesService } from 'src/app/services/employes.service';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  lgSub = false;
  stkSub = false;
  congSub = false;
  loggedUser;
  constructor(private router: Router, private employeService: EmployesService) { }

  ngOnInit() {
    const login = localStorage.getItem('login');
    this.employeService.getByLogin(login).subscribe(data => {
      this.loggedUser = data;
    }, error => {
    });
  }


  redirect() {
    this.router.navigate(['/employees']);
  }
}
