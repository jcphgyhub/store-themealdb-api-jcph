import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MealService } from '../../services/meal.service'
@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  meal:any = {};
  idMeal:any;

  constructor(private _location: Location,private activatedRoute: ActivatedRoute,
    private router:Router, private _mealService: MealService) { 
    this.activatedRoute.paramMap.subscribe( params =>{
      this.idMeal = params.get('idMeal');
      this._mealService.getMealById(this.idMeal)
      .subscribe(
        (response) => {
            if (response["meals"]) {
              this.meal = response["meals"][0];
            }});
    });
    }

  ngOnInit(): void {
  }
  backClicked() {
    this.router.navigateByUrl('/dashboard', { skipLocationChange: true }).then(() => {
      this._location.back();
    });
  }
}
