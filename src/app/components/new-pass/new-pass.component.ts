import { Component, OnInit } from '@angular/core';
import { EmployesService } from 'src/app/services/employes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.component.html',
  styleUrls: ['./new-pass.component.css']
})
export class NewPassComponent implements OnInit {
  pwd;
  confirmation;
  errorInfo = false;

  constructor(private employeService: EmployesService, private router: Router) { }

  ngOnInit() {
  }

  updatePassword() {
    if (this.pwd === this.confirmation) {
    const login = localStorage.getItem('employeLogin');
    this.employeService.getByLogin(login).subscribe(data => {
      const employee: any = data;
      console.log('employee:', employee);
      employee.pwd = this.pwd;
      console.log('employee:', employee);
      this.employeService.updateEmploye(employee).subscribe(data2 => {
      }, error => {
        this.errorInfo = true;
      });
    });
    localStorage.removeItem('employeLogin');
    this.router.navigate(['/login']);
  } else {
    this.errorInfo = true;
  }
  }

}
