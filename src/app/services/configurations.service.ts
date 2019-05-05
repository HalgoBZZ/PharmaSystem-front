import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsService {
  private uri = 'http://localhost:8088/configurations/';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getAllConfigs() {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'all', options);
  }

  saveConfig(config) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.post(this.uri + 'save', config, options);
  }
}

