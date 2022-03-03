import { Component, OnInit } from '@angular/core';
import { EducationAdminService } from '../admin/education-admin/education-admin.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  formaciones: any

  constructor(
    private educationAdminService: EducationAdminService
  ) { }
  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    return this.educationAdminService.getTraining().subscribe((data: any) => this.formaciones = data)
  }

}
