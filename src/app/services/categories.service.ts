import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private uri = 'http://localhost:8088/categorie/';
  headers = new HttpHeaders();
  constructor(public http: HttpClient) { }

  getAllCategories() {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + '/all', options);
  }

  getCategorieById(idCategorie) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'find/' + idCategorie, options);
  }

  addCategorie(categorie) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.post(this.uri + 'add', categorie, options);
  }

  updateCategorie(categorie) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.put(this.uri + 'update', categorie, options);
  }

  deleteCategorie(idCategorie) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.delete(this.uri + 'delete/' + idCategorie, options);
  }
}
