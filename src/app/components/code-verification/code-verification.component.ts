import { Component, OnInit } from '@angular/core';
import { EmployesService } from 'src/app/services/employes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-verification',
  templateUrl: './code-verification.component.html',
  styleUrls: ['./code-verification.component.css']
})
export class CodeVerificationComponent implements OnInit {
  code;
  errorInfo = false;

  constructor(private employeService: EmployesService, private router: Router) { }

  ngOnInit() {
  }

  sendCode() {
    this.employeService.getCode().subscribe(data => {
      const code = data.nom_emp;
      if (this.code === code) {
        this.router.navigate(['/newpass']);
      } else {
        this.errorInfo = true;
      }
    }, error => {
      this.errorInfo = true;
    });
  }

}
