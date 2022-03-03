import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_BASE = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class EducationAdminService {

  constructor(
    private http: HttpClient
  ) { }

  getTraining() {
    return this.http.get(`${API_BASE}/formaciones`)
  }

  create(formacion: any) {
    return this.http.post(`${API_BASE}/formaciones`, formacion)
  }

  update(id: number, formacion: any) {
    console.log(id,   formacion)
    return this.http.put(`${API_BASE}/formaciones/${id}`, formacion)
  }

  delete(id: number) {
    return this.http.delete(`${API_BASE}/formaciones/${id}`)
  }
}
