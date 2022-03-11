import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const API_BASE = 'http://localhost:8080'
@Injectable({
  providedIn: 'root'
})
export class AboutMeAdminService {

  constructor(
    private http: HttpClient
  ) { }

  getAbout(){
    return this.http.get(`${environment.apiUrl}/info`)
  }

  create(info: any){
    return this.http.post(`${environment.apiUrl}/info`, info)
  }

  update(id: number, info: any){
    return this.http.put(`${environment.apiUrl}/info/${id}`, info)
  }

  delete(id: number){
    return this.http.delete(`${environment.apiUrl}/info/${id}`)
  }
}
