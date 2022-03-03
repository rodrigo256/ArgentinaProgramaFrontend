import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AppRoutingModule } from './app-routing.module';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { NavLoginComponent } from './nav-login/nav-login.component';
import { AdminComponent } from './admin/admin.component';
import { NavadminComponent } from './admin/navadmin/navadmin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MeComponent } from './me/me.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { ExperienceAdminComponent } from './admin/experience-admin/experience-admin.component';
import { EducationAdminComponent } from './admin/education-admin/education-admin.component';
import { AboutMeAdminComponent } from './admin/about-me-admin/about-me-admin.component';
import { MeAdminComponent } from './admin/me-admin/me-admin.component';
import { ProjectAdminComponent } from './admin/project-admin/project-admin.component';
import { SkillAdminComponent } from './admin/skill-admin/skill-admin.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    BodyComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    TechnologiesComponent,
    ProjectsComponent,
    LoginComponent,
    HomeComponent,
    NavLoginComponent,
    AdminComponent,
    NavadminComponent,
    MeComponent,
    HomeAdminComponent,
    ExperienceAdminComponent,
    EducationAdminComponent,
    AboutMeAdminComponent,
    MeAdminComponent,
    ProjectAdminComponent,
    SkillAdminComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
