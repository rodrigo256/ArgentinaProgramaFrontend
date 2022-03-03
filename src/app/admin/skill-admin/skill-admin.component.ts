import { Component, OnInit } from '@angular/core';
import { SkillAdminService } from './skill-admin.service';
import { error, editItem, saveItem } from 'src/helpers'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skill-admin',
  templateUrl: './skill-admin.component.html',
  styleUrls: ['./skill-admin.component.css']
})
export class SkillAdminComponent implements OnInit {

  public messageError = error
  public messageEdit = editItem
  public messageSave = saveItem

  skills: any[] = []

  skill = {
    id: null,
    nombre: '',
    url_imagen: ''
  }

  constructor(
    private skillAdmin: SkillAdminService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    return this.skillAdmin.getAbility().subscribe((data: any) => this.skills = data)
  }

  save() {
    if (!this.skill.nombre || !this.skill.url_imagen) {
     this.messageError()
    }
    else {
      if (this.skill.id) {
       this.messageEdit()
        this.skillAdmin.update(this.skill.id!, this.skill).subscribe(() => this.getAll());

      } else {
       this.messageSave()
        this.skillAdmin.create(this.skill).subscribe(() => this.getAll())
      }
      this.skill = {
        id: null,
        nombre: '',
        url_imagen: ''
      }
    }
  }

  edit(skill: any) {
    this.skill = {
      ...skill
    }
  }

  delete(skill: any) {
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
        this.skillAdmin.delete(skill.id).subscribe(() => this.getAll())

      }
    })
  }

}
