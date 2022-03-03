import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_BASE = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class MeAdminService {

  constructor(
    private http: HttpClient
  ) { }

  getMe(){
    return this.http.get(`${API_BASE}/persona`)
  }


  create(persona: any) {
    return this.http.post(`${API_BASE}/persona`, persona)
  }

  update(id: number, persona: any) {
    return this.http.put(`${API_BASE}/persona/${id}`, persona)
  }

  delete(id: number) {
    return this.http.delete(`${API_BASE}/persona/${id}`)
  }

}
