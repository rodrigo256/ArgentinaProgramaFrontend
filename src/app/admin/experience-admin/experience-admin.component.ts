import { Component, OnInit } from '@angular/core';
import { ExperienceAdminService } from './experience-admin.service';
import { error, editItem, saveItem } from 'src/helpers'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experience-admin',
  templateUrl: './experience-admin.component.html',
  styleUrls: ['./experience-admin.component.css']
})
export class ExperienceAdminComponent implements OnInit {

  public messageError = error
  public messageEdit = editItem
  public messageSave = saveItem

  experiencias: any[] = []

  experiencia = {
    id: null,
    titulo: '',
    descripcion: ''
  }

  constructor(
    private experienceAdminService: ExperienceAdminService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.experienceAdminService.getExperience().subscribe((data: any) => this.experiencias = data)
  }

  save() {

    if(!this.experiencia.titulo || !this.experiencia.descripcion){
      this.messageError()
    }else{
      if(this.experiencia.id){
        this.messageEdit()
        this.experienceAdminService.update(this.experiencia.id!, this.experiencia).subscribe(() => this.getAll());
      }else{
        this.messageSave()
        this.experienceAdminService.create(this.experiencia).subscribe(() => this.getAll());
      }
      this.experiencia = {
        id: null,
        titulo: '',
        descripcion: ''
      }
    }
    
  }

  edit(experiencia: any) {
    this.experiencia = {
      ...experiencia
    };
  }

  delete(experiencia: any) {
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
        this.experienceAdminService.delete(experiencia.id).subscribe(() => this.getAll())

      }
    })
  }

}
