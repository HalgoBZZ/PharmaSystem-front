import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Fournisseur } from '../../modals/fournisseur';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {

  modalRef: BsModalRef;
  filter = false;
  newFour = new Fournisseur();

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  showFilter() {
    this.filter = !this.filter;
  }

 
}
