import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_BASE = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class EducationAdminService {

  constructor(
    private http: HttpClient
  ) { }

  getTraining() {
    return this.http.get(`${environment.apiUrl}/formaciones`)
  }

  create(formacion: any) {
    return this.http.post(`${environment.apiUrl}/formaciones`, formacion)
  }

  update(id: number, formacion: any) {
    return this.http.put(`${environment.apiUrl}/formaciones/${id}`, formacion)
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/formaciones/${id}`)
  }
}
