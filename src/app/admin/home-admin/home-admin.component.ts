import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

  removeModal() {
    const navbar = document.getElementById('sidebarMenu')
    navbar?.classList.remove('show')
  }
  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }
}
