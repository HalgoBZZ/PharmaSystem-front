import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Conges } from 'src/app/modals/Conge';



@Component({
  selector: 'app-conges',
  templateUrl: './conges.component.html',
  styleUrls: ['./conges.component.css']
})
export class CongesComponent implements OnInit {

  modalRef: BsModalRef;
  filter = false;
  newFour = new Conges();

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
