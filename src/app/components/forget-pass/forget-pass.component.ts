import { Component, OnInit } from '@angular/core';
import { EmployesService } from 'src/app/services/employes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent implements OnInit {

  login;
  email;
  employee;
  errorInfo = false;

  constructor(private employeService: EmployesService, private router: Router) { }

  ngOnInit() {
  }

  getCode() {
    this.employeService.getByLoginAndEmail(this.login, this.email).subscribe(data => {
      this.employee = data;
      if (this.employee) {
        localStorage.setItem('employeLogin', this.employee.login);
        this.router.navigate(['/verifcode']);
      } else {
        this.errorInfo = true;
      }
    }, error => {
      this.errorInfo = true;
    });
  }

}
