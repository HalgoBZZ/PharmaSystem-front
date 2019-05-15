import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Produit } from 'src/app/modals/produit';
import { ProduitsService } from 'src/app/services/produits.service';
import { FournisseursService } from 'src/app/services/fournisseurs.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { EmployesService } from 'src/app/services/employes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  modalRef: BsModalRef;
  filter = false;
  newProd = new Produit();
  prodToUpdate;
  prodToDelete;
  selectedProd;
  noData = true;
  dataLoaded = false;
  prodAdded = false;
  prodUpdated = false;
  prodDeleted = false;
  deleteError = false;
  updateError = false;
  addError = false;
  indexTodelete;
  produits;
  categories;
  fournisseurs;
  loggedUser;
  ref_field;
  nom_field;
  forme_field;
  dosage_field;
  qte_field;
  categorie_field;
  expiration_field;
  prix_field;

  testDate = new Date();

  constructor(private modalService: BsModalService, private produitService: ProduitsService,
    private employeService: EmployesService, private router: Router,
    private fournisseurService: FournisseursService, private categorieService: CategoriesService) { }

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
    this.getFournisseurs();
    this.getCategories();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openUpdateModal(template: TemplateRef<any>, produit) {
    this.openModal(template);
    this.prodToUpdate = produit;
  }
  openDeleteModal(confirmDelete:  TemplateRef<any>, produit, index) {
    this.prodToDelete = produit;
    this.openModal(confirmDelete);
    this.indexTodelete = index;
  }

  openDetailsModal(details:  TemplateRef<any>, produit) {
    this.selectedProd = produit;
    this.openModal(details);
  }

  showFilter() {
    this.filter = !this.filter;
  }

  getAll() {
    this.produitService.getAllProduits().subscribe(result => {
      this.produits = result;
      if (this.produits.length > 0) {
        this.noData = false;
      }
    });
  }

  getCategories() {
    this.categorieService.getAllCategories().subscribe(result => {
      this.categories = result;
    });
  }
  getFournisseurs() {
    this.fournisseurService.getAllFournisseurs().subscribe(result => {
      this.fournisseurs = result;
    });
  }

  addProduit() {
    this.produitService.addProduit(this.newProd).subscribe(result => {
      this.prodAdded = true;
      this.produits.push(this.newProd);
      this.getAll();
    }, error => {
      this.prodAdded = false;
      this.addError = true;
    });
    this.modalRef.hide();
  }

  updateProduit() {
    this.produitService.updateProduit(this.prodToUpdate).subscribe(result => {
      this.prodUpdated = true;
    }, error => {
      this.prodUpdated = false;
      this.updateError = true;
    });
    this.modalRef.hide();
  }

  confirm() {
    this.delete(this.prodToDelete.id_prod);
    this.modalRef.hide();
    this.produits.slice(this.indexTodelete, 1);
  }

  delete(idProd) {
    this.produitService.deleteProduit(idProd).subscribe(res => {
      this.getAll();
      this.prodDeleted = true;
      if (this.produits.length > 0) {
        this.noData = false;
      }
    }, error => {
      this.deleteError = true;
    });
  }

  compareDates(d1, d2) {
    return (new Date(d1) > new Date(d2));
  }

}
