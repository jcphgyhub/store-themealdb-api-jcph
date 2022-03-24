import { Component, OnInit } from '@angular/core';
import { MealService } from '../../../meals/services/meal.service';
import { IngredientService } from '../../services/ingredient.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-meals-filtered',
  templateUrl: './meals-filtered.component.html',
  styleUrls: ['./meals-filtered.component.scss']
})
export class MealsFilteredComponent implements OnInit {
  idIngredient:any;
  message:string="";
  show=false;
  meals:any[]=[];
  constructor(private _mealService:MealService, private _ingredientService:IngredientService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { 
    this.activatedRoute.paramMap.subscribe( params =>{
      this.idIngredient = params.get('idIngredient');
      this.selectIngredient(this.idIngredient)
    });
  }

  ngOnInit(): void {
  }
  selectIngredient(value:any){
    this._mealService.filterByMainIngredient(value)
    .subscribe(
      (response) => {
          if (response["meals"] != null) {
            this.meals=response["meals"];
            this.show=false;
          } else {
            this.show = (true);
            this.message = "No hay alimentos disponibles, donde este ingrediente sea el principal"
          }
        });
  }
  backClicked(){
    this.router.navigate(['/ingredients']);
  }
}
