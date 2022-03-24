import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { IngredientItemComponent } from './components/ingredient-item/ingredient-item.component';
import { SharedModule } from '../shared/shared.module';
import { MealsModule } from '../meals/meals.module';
import { MealsFilteredComponent } from './components/meals-filtered/meals-filtered.component';

@NgModule({
  declarations: [
    IngredientsComponent,
    IngredientItemComponent,
    MealsFilteredComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MealsModule
  ]
})
export class IngredientsModule { }
