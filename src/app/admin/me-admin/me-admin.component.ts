import { Component, OnInit } from '@angular/core';
import { MeAdminService } from './me-admin.service';
import { error, editItem, saveItem } from 'src/helpers'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-me-admin',
  templateUrl: './me-admin.component.html',
  styleUrls: ['./me-admin.component.css']
})
export class MeAdminComponent implements OnInit {

  public messageError = error
  public messageEdit = editItem
  public messageSave = saveItem


  persona: any = {
    nombre: "-",
    apellido: "-",
    correo: "-",
    pais: "-",
    titulo: "-",
    url_foto: "-",
    experiencia_laboral: "-"
  }

  constructor(
    private meAdminService: MeAdminService
  ) { }

  ngOnInit(): void {

    this.getAll()
  }

  getAll() {
    this.meAdminService.getMe().subscribe((data: any) => this.persona = data != null ? data : this.persona)
  }

  save() {
    if (!this.persona.nombre || !this.persona.apellido || !this.persona.correo || !this.persona.pais || !this.persona.titulo || !this.persona.experiencia_laboral) {
      this.messageError()
    }
    else {
      if (this.persona.id) {
        this.messageEdit()
        this.meAdminService.update(this.persona.id!, this.persona).subscribe(() => this.getAll());

      }
    }
  }


}
