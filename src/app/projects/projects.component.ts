import { Component, OnInit } from '@angular/core';
import { ProjectAdminService } from '../admin/project-admin/project-admin.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  proyectos: any
  existeProyecto: boolean = true

  constructor(
    private projectService: ProjectAdminService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll() {
    return this.projectService.getProject().subscribe((data: any) => {
      this.proyectos = data
      this.existeProyecto = Object.keys(this.proyectos).length != 0
    })
  }

}
