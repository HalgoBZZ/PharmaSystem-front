import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Employee } from 'src/app/modals/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  modalRef: BsModalRef;
  filter = false;
  newEmp = new Employee();
  url: any;
  private file: File = null;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  showFilter() {
    this.filter = !this.filter;
  }

  handleFileSelect(evt) {
    const files = evt.target.files;
    this.file = files[0];

    if (files && this.file) {
      const reader = new FileReader();

      reader.onload = this
        .handleReaderLoaded
        .bind(this);
      this.newEmp.photo = reader.readAsBinaryString(this.file);
      const reader2 = new FileReader();
      const file2 = <File>evt.target.files[0];
      reader2.readAsDataURL(file2); // read file as data url
      reader2.onload = () => { // called once readAsDataURL is completed
        this.url = reader2.result;
      };
    }
  }

  handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.newEmp.photo = btoa(binaryString);
  }
}
