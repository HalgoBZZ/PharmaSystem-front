import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Fournisseur } from '../../modals/fournisseur';
import { Router } from '@angular/router';
import { FournisseursService } from 'src/app/services/fournisseurs.service';
import { EmployesService } from 'src/app/services/employes.service';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {

  modalRef: BsModalRef;
  filter = false;
  newFour = new Fournisseur();
  fourToUpdate;
  fourToDelete;
  noData = true;
  dataLoaded = false;
  fourAdded = false;
  fourUpdated = false;
  fourDeleted = false;
  deleteError = false;
  updateError = false;
  addError = false;
  indexTodelete;
  fournisseurs;
  loggedUser;

  constructor(private modalService: BsModalService, private fournisseurService: FournisseursService,
    private router: Router, private employeService: EmployesService) { }

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
    this.dataLoaded = true;
  }

  goToLogin() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  showFilter() {
    this.filter = !this.filter;
  }
  openUpdateModal(template: TemplateRef<any>, fournisseur) {
    this.openModal(template);
    this.fourToUpdate = fournisseur;
  }
  openDeleteModal(confirmDelete:  TemplateRef<any>, fournisseur, index) {
    this.fourToDelete = fournisseur;
    this.openModal(confirmDelete);
    this.indexTodelete = index;
  }


  getAll() {
    this.fournisseurService.getAllFournisseurs().subscribe(result => {
      this.fournisseurs = result;
      if (this.fournisseurs.length > 0) {
        this.noData = false;
      }
    });
  }

  addFournisseur() {
    this.fournisseurService.addFournisseur(this.newFour).subscribe(result => {
      this.fourAdded = true;
      this.fournisseurs.push(this.newFour);
      this.getAll();
    }, error => {
      this.fourAdded = false;
      this.addError = true;
    });
    this.modalRef.hide();
  }

  updateFournisseur() {
    this.fournisseurService.updateFournisseur(this.fourToUpdate).subscribe(result => {
      this.fourUpdated = true;
    }, error => {
      this.fourUpdated = false;
      this.updateError = true;
    });
    this.modalRef.hide();
  }

  confirm() {
    this.delete(this.fourToDelete.id_four);
    this.modalRef.hide();
    this.fournisseurs.slice(this.indexTodelete, 1);
  }

  delete(idFour) {
    this.fournisseurService.deleteFournisseur(idFour).subscribe(res => {
      this.getAll();
      this.fourDeleted = true;
      if (this.fournisseurs.length > 0) {
        this.noData = false;
      }
    }, error => {
      this.deleteError = true;
    });
  }


}
