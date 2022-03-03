import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class LoginService {

  API_BASE = 'http://localhost:8080'
  token: any

  constructor(
    private http: HttpClient, private router: Router
  ) { }

  login(email: string, password: string) {
    this.http.post(`${this.API_BASE}/authenticate`, { email: email, password: password })
      .subscribe((resp: any) => {
        this.router.navigate(['admin']);
        localStorage.setItem('auth_token', resp.token);
      })
  }

  logout(){
    localStorage.removeItem('token');
  }
  
  public get logIn(): boolean{
    return (localStorage.getItem('token') !== null);
  }

}


