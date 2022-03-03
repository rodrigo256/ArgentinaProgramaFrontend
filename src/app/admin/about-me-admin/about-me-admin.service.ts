import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const API_BASE = 'http://localhost:8080'
@Injectable({
  providedIn: 'root'
})
export class AboutMeAdminService {

  constructor(
    private http: HttpClient
  ) { }

  getAbout(){
    return this.http.get(`${API_BASE}/info`)
  }

  create(info: any){
    return this.http.post(`${API_BASE}/info`, info)
  }

  update(id: number, info: any){
    return this.http.put(`${API_BASE}/info/${id}`, info)
  }

  delete(id: number){
    return this.http.delete(`${API_BASE}/info/${id}`)
  }
}
