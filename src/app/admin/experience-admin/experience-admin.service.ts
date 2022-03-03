import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_BASE = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class ExperienceAdminService {

  constructor(
    private http: HttpClient
  ) { }

  getExperience(){
    return this.http.get(`${API_BASE}/experiencias`)
  }

  create(experiencia: any){
    return this.http.post(`${API_BASE}/experiencias`, experiencia)
  }

  update(id: number, experiencia:any){
    return this.http.put(`${API_BASE}/experiencias/${id}`, experiencia )
  }

  delete(id: number){
    return this.http.delete(`${API_BASE}/experiencias/${id}`)
  }
}
