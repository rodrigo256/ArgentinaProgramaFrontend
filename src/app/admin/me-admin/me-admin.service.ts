import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MeAdminService {

  constructor(
    private http: HttpClient
  ) { }

  getMe(){
    return this.http.get(`${environment.apiUrl}/persona`)
  }


  create(persona: any) {
    return this.http.post(`${environment.apiUrl}/persona`, persona)
  }

  update(id: number, persona: any) {
    return this.http.put(`${environment.apiUrl}/persona/${id}`, persona)
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/persona/${id}`)
  }

}
