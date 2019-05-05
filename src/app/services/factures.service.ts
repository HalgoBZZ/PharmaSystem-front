import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacturesService {
  private uri = 'http://localhost:8088/facture/';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getAllFactures() {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'all', options);
  }

  getFactureById(idFacture) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'find/' + idFacture, options);
  }

  addFcture(facture) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.post(this.uri + 'add', facture, options);
  }

  updateFacture(facture) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.put(this.uri + 'update', facture, options);
  }

  deleteFacture(idFacture) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.delete(this.uri + 'delete' + idFacture, options);
  }

}
