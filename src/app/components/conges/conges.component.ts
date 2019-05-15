import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Conges } from 'src/app/modals/Conge';
import { CongesService } from 'src/app/services/conges.service';
import { EmployesService } from 'src/app/services/employes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-conges',
  templateUrl: './conges.component.html',
  styleUrls: ['./conges.component.css']
})
export class CongesComponent implements OnInit {

  modalRef: BsModalRef;
  filter = false;
  newConge = new Conges();
  congeToUpdate;
  congeToDelete;
  selectedConge;
  noData = true;
  dataLoaded = false;
  congeAdded = false;
  congeUpdated = false;
  congeDeleted = false;
  deleteError = false;
  updateError = false;
  addError = false;
  indexTodelete;
  conges;
  loggedUser;
  debut_field;
  fin_field;
  cause_field;
  ajout_field;
  modification_field;
  etat_field;

  constructor(private modalService: BsModalService, private congeService: CongesService,
    private employeService: EmployesService, private router: Router) { }

  ngOnInit() {
    const login = localStorage.getItem('login');
    this.employeService.getByLogin(login).subscribe(data => {
      if (data == null) {
        this.router.navigate(['/login']);
      }
      this.loggedUser = data;
      if (this.loggedUser.role_emp === 'Adminstrateur') {
        this.getAll();
      } else {
        this.getByUser(this.loggedUser.id_emp);
      }
    }, error => {
      this.router.navigate(['/login']);
    });

    this.dataLoaded = true;
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openUpdateModal(template: TemplateRef<any>, conge) {
    this.openModal(template);
    this.congeToUpdate = conge;
  }
  openDeleteModal(confirmDelete: TemplateRef<any>, conge, index) {
    this.congeToDelete = conge;
    this.openModal(confirmDelete);
    this.indexTodelete = index;
  }


  showFilter() {
    this.filter = !this.filter;
  }

  getAll() {
    this.congeService.getAllConges().subscribe(result => {
      this.conges = result;
      if (this.conges.length > 0) {
        this.noData = false;
      }
    });
  }

  addConge() {
    this.newConge.employee = this.loggedUser;
    this.congeService.addConge(this.newConge).subscribe(result => {
      this.congeAdded = true;
      this.conges.push(this.newConge);
      if (this.loggedUser.role_emp === 'Adminstrateur') {
        this.getAll();
      } else {
        this.getByUser(this.loggedUser.id_emp);
      }
    }, error => {
      this.congeAdded = false;
      this.addError = true;
    });
    this.modalRef.hide();
  }

  updateConge() {
    this.congeService.updateConge(this.congeToUpdate).subscribe(result => {
      this.congeUpdated = true;
    }, error => {
      this.congeUpdated = false;
      this.updateError = true;
    });
    this.modalRef.hide();
  }

  confirm() {
    this.delete(this.congeToDelete.id_conges);
    this.modalRef.hide();
    this.conges.slice(this.indexTodelete, 1);
  }

  delete(id_conj) {
    this.congeService.deleteConge(id_conj).subscribe(res => {
      if (this.loggedUser.role_emp === 'Adminstrateur') {
        this.getAll();
      } else {
        this.getByUser(this.loggedUser.id_emp);
      }
      this.congeDeleted = true;
      if (this.conges.length > 0) {
        this.noData = false;
      }
    }, error => {
      this.deleteError = true;
    });
  }

  valider(conge) {
    this.congeService.valideConge(conge).subscribe(data => {
      this.congeUpdated = true;
      if (this.loggedUser.role_emp === 'Adminstrateur') {
        this.getAll();
      } else {
        this.getByUser(this.loggedUser.id_emp);
      }
    }, error => {
      this.updateError = false;
    });
  }

  refuser(conge) {
    this.congeService.refuseConge(conge).subscribe(date => {
      if (this.loggedUser.role_emp === 'Adminstrateur') {
        this.getAll();
      } else {
        this.getByUser(this.loggedUser.id_emp);
      }
      this.congeUpdated = true;
    }, error => {
      this.updateError = true;
    });
  }

  getByUser(user) {
    this.congeService.getByUser(user).subscribe(result => {
      this.conges = result;
      if (this.conges.length > 0) {
        this.noData = false;
      }
    });
  }

}
