import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =[
  {
    path: 'login',
    component: LoginComponent},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, {
    path: '',
    component: UserLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/user-layout/user-layout.module').then(x => x.UserLayoutModule)
  }]},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
