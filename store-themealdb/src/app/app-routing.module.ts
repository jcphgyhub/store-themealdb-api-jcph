import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/components/login/login.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { MealsComponent } from './meals/components/meals/meals.component';
import { IngredientsComponent } from './ingredients/components/ingredients/ingredients.component';
import { MealsFilteredComponent } from './ingredients/components/meals-filtered/meals-filtered.component';
import { UserComponent } from './users/components/user/user.component';
import { MealComponent } from './meals/components/meal/meal.component';
//import {  } from '';
const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'meals', component: MealsComponent},
  {path:'meals/:idMeal', component: MealComponent},
  {path:'ingredients', component: IngredientsComponent},
  {path:'ingredients/:idIngredient', component: MealsFilteredComponent},
  {path:'profile', component: UserComponent},
  {path:'**', pathMatch: 'full',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
