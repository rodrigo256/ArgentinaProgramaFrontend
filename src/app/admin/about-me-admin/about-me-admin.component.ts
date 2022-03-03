import { Component, OnInit } from '@angular/core';
import { AboutMeAdminService } from './about-me-admin.service';
import { error, editItem, saveItem } from 'src/helpers'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about-me-admin',
  templateUrl: './about-me-admin.component.html',
  styleUrls: ['./about-me-admin.component.css']
})
export class AboutMeAdminComponent implements OnInit {

  public messageError = error
  public messageEdit = editItem
  public messageSave = saveItem


  informaciones: any = {
    acerca: ''
  }

  constructor(
    private aboutMeAdmin: AboutMeAdminService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.aboutMeAdmin.getAbout().subscribe((data: any) => this.informaciones = data != null ? data : this.informaciones)
  }

  save() {
    if (!this.informaciones.acerca) {
     this.messageError()
    }
    else {
      if (this.informaciones.id) {
       this.messageEdit()
        this.aboutMeAdmin.update(this.informaciones.id!, this.informaciones).subscribe(() => this.getAll());

      } else {
       this.messageSave()
        this.aboutMeAdmin.create(this.informaciones).subscribe(() => this.getAll())
      }
      this.informaciones = {
        id: null,
        acerca: ''
      }
    }
  }

}
