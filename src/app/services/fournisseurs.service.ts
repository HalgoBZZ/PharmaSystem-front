import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FournisseursService {
  private uri = 'http://localhost:8088/fournisseur/';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getAllFournisseurs() {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'all', options);
  }

  getFournisseurById(idFournisseur) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'find/' + idFournisseur, options);
  }

  addFournisseur(fournisseur) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.post(this.uri + 'add', fournisseur, options);
  }

  updateFournisseur(fournisseur) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.put(this.uri + 'update', fournisseur, options);
  }

  deleteFournisseur(idFournisseur) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.delete(this.uri + 'delete/' + idFournisseur, options);
  }
}
