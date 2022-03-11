import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  token: any

  constructor(
    private http: HttpClient, private router: Router
  ) { }

  login(email: string, password: string) {
    this.http.post(`${environment.apiUrl}/authenticate`, { email: email, password: password })
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


