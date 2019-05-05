import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Employee } from 'src/app/modals/employee';
import { EmployesService } from 'src/app/services/employes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  modalRef: BsModalRef;
  filter = false;
  url: any;
  private file: File = null;
  employees;
  newEmployee = new Employee();
  employeToupdate;
  selectedEmployee;
  noData = true;
  dataLoaded = false;
  employeAdded = false;
  addingError = false;
  employeUpdated = false;
  updatingError = false;
  emplyeToDelete;
  indexTodelete;
  deleted = false;
  deleteError = false;
  loggedUser;
  confirmationpwd;

  constructor(private modalService: BsModalService, private employeService: EmployesService, private router: Router) { }

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
    this.file = null;
    this.url = null;
  }
  openDetailsModal(template: TemplateRef<any>, employee) {
    this.openModal(template);
    this.selectedEmployee = employee;
  }
  openUpdateModal(template: TemplateRef<any>, employee) {
    this.openModal(template);
    this.employeToupdate = employee;
  }
  openDeleteModal(confirmDelete:  TemplateRef<any>, employee, index) {
    this.emplyeToDelete = employee;
    this.openModal(confirmDelete);
    this.indexTodelete = index;
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
      this.newEmployee.photo = reader.readAsBinaryString(this.file);
      const reader2 = new FileReader();
      const file2 = <File>evt.target.files[0];
      reader2.readAsDataURL(file2); // read file as data url
      reader2.onload = () => { // called once readAsDataURL is completed
        this.url = reader2.result;
      };
    }
  }

  handleFileSelectUpdate(evt) {
    const files = evt.target.files;
    this.file = files[0];
    if (files && this.file) {
      const reader = new FileReader();
      reader.onload = this
        .handleReaderLoadedForUpdate
        .bind(this);
      this.employeToupdate.photo = reader.readAsBinaryString(this.file);
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
    this.newEmployee.photo = btoa(binaryString);
  }

  handleReaderLoadedForUpdate(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.employeToupdate.photo = btoa(binaryString);
  }

  getAll() {
    this.employeService.getAllEmployes().subscribe(result => {
      this.employees = result;
      if (this.employees.length > 0) {
        this.noData = false;
      }
    });
  }

  addEmployee() {
    this.employeService.addEmploye(this.newEmployee).subscribe(result => {
      this.employeAdded = true;
      this.employees.push(this.newEmployee);
      this.getAll();
    }, error => {
      this.employeAdded = false;
      this.addingError = true;
    });
    this.modalRef.hide();
    this.file = null;
    this.url = null;
  }

  updateEmployee() {
    this.employeService.updateEmploye(this.employeToupdate).subscribe(result => {
      this.employeUpdated = true;
    }, error => {
      this.employeUpdated = false;
      this.updatingError = true;
    });
    this.modalRef.hide();
    this.file = null;
    this.url = null;
    location.reload();
  }

  confirm() {
    this.delete(this.emplyeToDelete.id_emp);
    this.modalRef.hide();
    this.employees.slice(this.indexTodelete, 1);
  }

  delete(idEmploye) {
    this.employeService.deleteEmploye(idEmploye).subscribe(res => {
      this.getAll();
      this.deleted = true;
      if (this.employees.length > 0) {
        this.noData = false;
      }
    }, error => {
      this.deleteError = true;
    });
  }

}
