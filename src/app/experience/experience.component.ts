import { Component, OnInit } from '@angular/core';
import { ExperienceAdminService } from '../admin/experience-admin/experience-admin.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {


  experiencias: any

  constructor(
    private experienceAdminService: ExperienceAdminService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.experienceAdminService.getExperience().subscribe((data: any) => this.experiencias = data)
  }

}
