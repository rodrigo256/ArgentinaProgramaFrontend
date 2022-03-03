import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_BASE = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class ProjectAdminService {

  constructor(
    private http: HttpClient
  ) { }

  getProject() {
    return this.http.get(`${API_BASE}/proyecto`)
  }
  create(proyecto: any) {
    return this.http.post(`${API_BASE}/proyecto`, proyecto)
  }

  update(id: number, proyecto: any) {
    return this.http.put(`${API_BASE}/proyecto/${id}`, proyecto)
  }

  delete(id: number) {
    return this.http.delete(`${API_BASE}/proyecto/${id}`)
  }
}
