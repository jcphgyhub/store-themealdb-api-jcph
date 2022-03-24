import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MealsModule } from '../meals/meals.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MealsModule,
    SharedModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
