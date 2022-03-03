import { Component, OnInit } from '@angular/core';
import { ProjectAdminService } from './project-admin.service';
import { error, editItem, saveItem } from 'src/helpers'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-project-admin',
  templateUrl: './project-admin.component.html',
  styleUrls: ['./project-admin.component.css']
})
export class ProjectAdminComponent implements OnInit {

  public messageError = error
  public messageEdit = editItem
  public messageSave = saveItem

  proyectos: any[] = []

  existeProyecto: boolean = true

  proyecto = {
    id: null,
    titulo: '',
    descripcion: '',
    url_git: '',
    url_demo: '',
    url_portada: ''
  }

  constructor(
    private projectService: ProjectAdminService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll() {
    return this.projectService.getProject().subscribe((data: any) => {
      this.proyectos = data
    })
  }

  save() {
    if (!this.proyecto.titulo || !this.proyecto.descripcion) {
      this.messageError()
    }
    else {
      if (this.proyecto.id) {
        this.messageEdit()
        this.projectService.update(this.proyecto.id!, this.proyecto).subscribe(() => this.getAll());

      } else {
        this.messageSave()
        this.projectService.create(this.proyecto).subscribe(() => this.getAll())
      }
      this.proyecto = {
        id: null,
        titulo: '',
        descripcion: '',
        url_git: '',
        url_demo: '',
        url_portada: ''
      }
    }
  }

  edit(proyecto: any) {
    this.proyecto = {
      ...proyecto
    }
  }

  delete(proyecto: any) {
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
        this.projectService.delete(proyecto.id).subscribe(() => this.getAll())

      }
    })
  }

}
