import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { IngredientItemComponent } from './components/ingredient-item/ingredient-item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    IngredientsComponent,
    IngredientItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class IngredientsModule { }
