import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [guard], data: {expectedRol: ['admin']} },
  { path: 'registro', component: RegistroComponent }
]


@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ]
})
export class AppRoutingModule { }
