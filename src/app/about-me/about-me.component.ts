import { Component, OnInit } from '@angular/core';
import { AboutMeAdminService } from '../admin/about-me-admin/about-me-admin.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  informacion: any

  constructor(
    private aboutMeAdminService: AboutMeAdminService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    return this.aboutMeAdminService.getAbout().subscribe((data: any) => this.informacion = data)
  }
}
