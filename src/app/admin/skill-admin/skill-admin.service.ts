import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_BASE = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class SkillAdminService {

  constructor(
    private http: HttpClient
  ) { }

  getAbility(){
    return this.http.get(`${API_BASE}/habilidad`)
  }

  create(habilidad: any) {
    return this.http.post(`${API_BASE}/habilidad`, habilidad)
  }

  update(id: number, habilidad: any) {
    return this.http.put(`${API_BASE}/habilidad/${id}`, habilidad)
  }

  delete(id: number) {
    return this.http.delete(`${API_BASE}/habilidad/${id}`)
  }

}
