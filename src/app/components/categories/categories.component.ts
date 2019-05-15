import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Categorie } from 'src/app/modals/categorie';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router } from '@angular/router';
import { EmployesService } from 'src/app/services/employes.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  modalRef: BsModalRef;
  filter = false;
  newCategorie = new Categorie();
  categorieToUpdate;
  categorieToDelete;
  selectedCategorie;
  noData = true;
  dataLoaded = false;
  categorieAdded = false;
  categorieUpdated = false;
  categorieDeleted = false;
  deleteError = false;
  updateError = false;
  addError = false;
  indexTodelete;
  categories;
  loggedUser;
  nom_field;
  ajout_field;
  modification_field;


  constructor(private modalService: BsModalService, private categorieService: CategoriesService,
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
    this.dataLoaded = true;
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openUpdateModal(template: TemplateRef<any>, categorie) {
    this.openModal(template);
    this.categorieToUpdate = categorie;
  }
  openDeleteModal(confirmDelete:  TemplateRef<any>, categorie, index) {
    this.categorieToDelete = categorie;
    this.openModal(confirmDelete);
    this.indexTodelete = index;
  }


  showFilter() {
    this.filter = !this.filter;
  }

  getAll() {
    this.categorieService.getAllCategories().subscribe(result => {
      this.categories = result;
      if (this.categories.length > 0) {
        this.noData = false;
      }
    });
  }

  addCategorie() {
    this.categorieService.addCategorie(this.newCategorie).subscribe(result => {
      this.categorieAdded = true;
      this.categories.push(this.newCategorie);
      this.getAll();
    }, error => {
      this.categorieAdded = false;
      this.addError = true;
    });
    this.modalRef.hide();
  }

  updateCategorie() {
    this.categorieService.updateCategorie(this.categorieToUpdate).subscribe(result => {
      this.categorieUpdated = true;
    }, error => {
      this.categorieUpdated = false;
      this.updateError = true;
    });
    this.modalRef.hide();
  }

  confirm() {
    this.delete(this.categorieToDelete.id_cat);
    this.modalRef.hide();
    this.categories.slice(this.indexTodelete, 1);
  }

  delete(id_cat) {
    this.categorieService.deleteCategorie(id_cat).subscribe(res => {
      this.getAll();
      this.categorieDeleted = true;
      if (this.categories.length > 0) {
        this.noData = false;
      }
    }, error => {
      this.deleteError = true;
    });
  }

}
