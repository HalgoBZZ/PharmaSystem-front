import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployesService } from 'src/app/services/employes.service';

@Component({
  selector: 'app-mon-profil',
  templateUrl: './mon-profil.component.html',
  styleUrls: ['./mon-profil.component.css']
})
export class MonProfilComponent implements OnInit {
  loggedUser;
  ansienPwd;
  testAnsienPwd;
  url: any;
  newPwd;
  updateFailed = false;
  updateSuccess = false;
  private file: File = null;

  constructor(private router: Router, private employeService: EmployesService) { }

  ngOnInit() {
    const login = localStorage.getItem('login');
    this.employeService.getByLogin(login).subscribe(data => {
      if (data == null) {
        this.router.navigate(['/login']);
      }
      this.loggedUser = data;
      this.ansienPwd = this.loggedUser.pwd;
    }, error => {
      this.router.navigate(['/login']);
    });
  }

  cancelUpdate() {
    this.router.navigate(['/principal']);
  }

  updateMyData() {
    this.loggedUser.pwd = this.newPwd;
    this.employeService.updateEmploye(this.loggedUser).subscribe( data => {
      this.updateSuccess = true;
    }, error => {
      this.updateFailed = true;
    });
    location.reload();
  }

  handleFileSelectUpdate(evt) {
    const files = evt.target.files;
    this.file = files[0];
    if (files && this.file) {
      const reader = new FileReader();
      reader.onload = this
        .handleReaderLoadedForUpdate
        .bind(this);
      this.loggedUser.photo = reader.readAsBinaryString(this.file);
      const reader2 = new FileReader();
      const file2 = <File>evt.target.files[0];
      reader2.readAsDataURL(file2); // read file as data url
      reader2.onload = () => { // called once readAsDataURL is completed
        this.url = reader2.result;
      };
    }
  }

  handleReaderLoadedForUpdate(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.loggedUser.photo = btoa(binaryString);
  }

}
