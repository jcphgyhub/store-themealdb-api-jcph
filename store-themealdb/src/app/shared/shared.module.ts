import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    //Materialze Dependencies
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
