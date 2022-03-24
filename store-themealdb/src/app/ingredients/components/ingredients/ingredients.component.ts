import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../services/ingredient.service';
@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  ingredients:any[]=[];
  mainIngredients:number[]=[1,2,3,4];
  constructor(
    private _ingredientService:IngredientService) {
      this.ingredientService();
  }

  ingredientService(){
    this._ingredientService.listIngredients().subscribe((response)=>{
      if(response["meals"]){
        this.ingredients=this.ingredientsServiceFilter(response["meals"]);
      }
    });
  }
  ingredientsServiceFilter(arreglo:any):any[]{
    let array:any[]=[];
    for(let item of arreglo){
      if(item.idIngredient < 5){
        array.push(item);
      }
    }
    return array;
  }
  mealService(){

  }
  ngOnInit(): void {
  }

}
