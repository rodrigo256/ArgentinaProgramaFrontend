import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillAdminService {

  constructor(
    private http: HttpClient
  ) { }

  getAbility(){
    return this.http.get(`${environment.apiUrl}/habilidad`)
  }

  create(habilidad: any) {
    return this.http.post(`${environment.apiUrl}/habilidad`, habilidad)
  }

  update(id: number, habilidad: any) {
    return this.http.put(`${environment.apiUrl}/habilidad/${id}`, habilidad)
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/habilidad/${id}`)
  }

}
