import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_BASE = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class ExperienceAdminService {

  constructor(
    private http: HttpClient
  ) { }

  getExperience(){
    return this.http.get(`${environment.apiUrl}/experiencias`)
  }

  create(experiencia: any){
    return this.http.post(`${environment.apiUrl}/experiencias`, experiencia)
  }

  update(id: number, experiencia:any){
    return this.http.put(`${environment.apiUrl}/experiencias/${id}`, experiencia )
  }

  delete(id: number){
    return this.http.delete(`${environment.apiUrl}/experiencias/${id}`)
  }
}
