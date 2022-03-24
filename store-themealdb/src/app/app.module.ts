import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { MealsModule } from './meals/meals.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { UsersModule } from './users/users.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    NgbModule,
    MealsModule,
    DashboardModule,
    LoginModule,
    IngredientsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
