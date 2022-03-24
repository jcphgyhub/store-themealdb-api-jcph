import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsComponent } from './components/meals/meals.component';
import { MealItemComponent } from './components/meal-item/meal-item.component';
import { MealComponent } from './components/meal/meal.component';
import { SharedModule } from '../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
@NgModule({
  declarations: [
    MealsComponent,
    MealItemComponent,
    MealComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatPaginatorModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MealItemComponent
  ]
})
export class MealsModule { }
