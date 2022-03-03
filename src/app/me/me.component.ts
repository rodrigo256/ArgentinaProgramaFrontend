import { Component, OnInit } from '@angular/core';
import { MeAdminService } from '../admin/me-admin/me-admin.service';

interface Persona {
  id: number,
  nombre: string,
  apellido: string,
  correo: string,
  pais: string,
  titulo: string,
  url_foto: string,
  experiencia_laboral: string
}

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  persona: any

  constructor(
    private meAdminService: MeAdminService
  ) { }

  ngOnInit(): void {
    this.persona = {
      id: 0,
      nombre: "",
      apellido: "",
      correo: "",
      pais: "",
      titulo: "",
      url_foto: "",
      experiencia_laboral: ""
    }

     this.getAll()
  }

  getAll() {
    return this.meAdminService.getMe().subscribe((data: any) => this.persona = data)
  }

}
