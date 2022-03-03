import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { SkillAdminService } from '../admin/skill-admin/skill-admin.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  tecnologias: any

  deviceInfo: any

  constructor(
    private skillAdmin: SkillAdminService,
    private deviceService: DeviceDetectorService
  ) { }

  ngOnInit(): void {
    this.getAll()
   /*  this.epicFunction(); */
  }

  getAll() {
    return this.skillAdmin.getAbility().subscribe((data: any) => this.tecnologias = data)
  }

  epicFunction() {
    const isMobile = this.deviceService.isMobile();

    return isMobile
  }
}
