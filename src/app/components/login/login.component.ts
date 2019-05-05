import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployesService } from 'src/app/services/employes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login;
  pwd;
  connectionError = false;
  connectedUser;

  constructor(private router: Router, private employeService: EmployesService) { }

  ngOnInit() {
    const connected = localStorage.getItem('connected');
    if (connected === 'connected') {
      this.router.navigate(['/principal']);
    }
  }

  authentication() {
    this.employeService.authentication(this.login, this.pwd).subscribe(data => {
      this.connectedUser = data;
      if (data !== null) {
      this.router.navigate(['/principal']);
      localStorage.setItem('connected', 'connected');
      localStorage.setItem('login', this.login);
      } else {
        this.connectionError = true;
      }
    }, error => {
      this.connectionError = true;
    });
  }

}
