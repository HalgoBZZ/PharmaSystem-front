import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfigurationsService } from 'src/app/services/configurations.service';
import { EmployesService } from 'src/app/services/employes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {

  modalRef: BsModalRef;
  filter = false;
  config;
  configUpdated = false;
  errorUpdate = false;
  expiration;
  seuil_qte;
  loggedUser;

  constructor(private modalService: BsModalService, private configuartionService: ConfigurationsService,
    private employeService: EmployesService, private router: Router) { }

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
    this.getAll();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openExpirationModal(template: TemplateRef<any>) {
    this.openModal(template);
  }

  openSeuilModal(template: TemplateRef<any>, seuil_qte) {
    this.openModal(template);
  }

  getAll() {
    this.configuartionService.getAllConfigs().subscribe(result => {
      this.config = result;
      this.seuil_qte = this.config[0].seuil_qte;
      this.expiration = this.config[0].expiration;
    });
  }

  updateConfig(conf) {
    this.configuartionService.saveConfig(conf).subscribe(result => {
      this.configUpdated = true;
      this.getAll();
    }, error => {
      this.errorUpdate = true;
    });
    this.modalRef.hide();
  }

  updateExpiration() {
    this.config[0].expiration = this.expiration;
    this.updateConfig(this.config[0]);
  }

  updateQteSeuil() {
    this.config[0].seuil_qte = this.seuil_qte;
    this.updateConfig(this.config[0]);
  }
}
