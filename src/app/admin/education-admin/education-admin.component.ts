import { Component, OnInit } from '@angular/core';
import { EducationAdminService } from './education-admin.service';
import { error, editItem, saveItem } from 'src/helpers'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-education-admin',
  templateUrl: './education-admin.component.html',
  styleUrls: ['./education-admin.component.css']
})
export class EducationAdminComponent implements OnInit {
  public messageError = error
  public messageEdit = editItem
  public messageSave = saveItem

  formaciones: any[] = []

  formacion = {
    id: null,
    titulo: '',
    descripcion: ''
  }

  constructor(
    private educationAdminService: EducationAdminService,
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.educationAdminService.getTraining().subscribe((data: any) => this.formaciones = data)
  }

  save() {
    if (!this.formacion.titulo || !this.formacion.descripcion) {
     this.messageError()
    }
    else {
      if (this.formacion.id) {
       this.messageEdit()
        this.educationAdminService.update(this.formacion.id!, this.formacion).subscribe(() => this.getAll());

      } else {
       this.messageSave()
        this.educationAdminService.create(this.formacion).subscribe(() => this.getAll())
      }
      this.formacion = {
        id: null,
        titulo: '',
        descripcion: ''
      }
    }
  }

  edit(formacion: any) {
    this.formacion = {
      ...formacion
    }
  }

  delete(formacion: any) {
    Swal.fire({
      title: '¿Estás seguro quieres borrarlo?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, quiero borrarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Borrado!',
          'Tu item ha sido borrado.',
          'success'
        )
        this.educationAdminService.delete(formacion.id).subscribe(() => this.getAll())

      }
    })
  }

}
