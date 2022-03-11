import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_BASE = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class ProjectAdminService {

  constructor(
    private http: HttpClient
  ) { }

  getProject() {
    return this.http.get(`${environment.apiUrl}/proyecto`)
  }
  create(proyecto: any) {
    return this.http.post(`${environment.apiUrl}/proyecto`, proyecto)
  }

  update(id: number, proyecto: any) {
    return this.http.put(`${environment.apiUrl}/proyecto/${id}`, proyecto)
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/proyecto/${id}`)
  }
}
