import { Component, OnInit, Output, ViewChild, EventEmitter  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MealService } from '../../services/meal.service';
import { IngredientService } from '../../../ingredients/services/ingredient.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormControl }  from '@angular/forms';
@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {
  meals: any[] = [];
  selectedValue:any;
  categoriaElegida:any;
  areaElegida:any;
  ingredienteElegido:any;
  ingredientesSelect = new FormControl(true);
  categoriasSelect = new FormControl(true);
  areasSelect = new FormControl(true);
  filtros: Filtro[] = [
    {value: 'category', viewValue: 'Categoria'},
    {value: 'area', viewValue: 'Area'},
    {value: 'ingredient', viewValue: 'Ingrediente'}
  ];
  categorias:any[]=[];
  ingredientes:any[]=[];
  areas:any[]=[];
  value:string="";
  @Output() selectionChange: EventEmitter<any>;
  constructor(private _mealService:MealService,
    private _ingredientService:IngredientService) {
    this.getAllMeals();
    this.getAllAreas();
    this.getAllIngredients();
    this.getAllCategories();
    this.selectionChange = new EventEmitter();
  }
  getAllIngredients(){
    this._ingredientService.listIngredients()
    .subscribe(
      (response) => {
          if (response["meals"]) {
            this.ingredientes =(response["meals"]);
          }});
  }
  getAllAreas(){
    this._mealService.listArea()
    .subscribe(
      (response) => {
          if (response["meals"]) {
            this.areas =(response["meals"]);
          }});
  }
  getAllCategories(){
    this._mealService.listCategories()
    .subscribe(
      (response) => {
          if (response["meals"]) {
            this.categorias =(response["meals"]);
          }});
  }
  getAllMeals(){
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    for(let i=0; i<alphabet.length; i++){
      this.getMealsByFirstLetter(alphabet[i]);
    }
  }
  getMealsByFirstLetter(char:string){
    this._mealService.getMealsByFirstLetter(char)
    .subscribe(
      (response) => {
          if (response["meals"]) {
            this.meals=this.meals.concat(response["meals"]);
          }});
  }
  ngOnInit(): void {
  }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  pageChanged(event: PageEvent) {
    console.log({ event });
  }
  selected(selectedValue:any){
    if(selectedValue.value==='category'){
      this.categoriasSelect = new FormControl(false);
      this.areasSelect = new FormControl(true);
      this.ingredientesSelect = new FormControl(true);
    } else {
      if (selectedValue.value==='ingredient'){
        this.ingredientesSelect = new FormControl(false);
        this.categoriasSelect = new FormControl(true);
        this.areasSelect = new FormControl(true);
      } else {
        this.areasSelect = new FormControl(false);
        this.categoriasSelect = new FormControl(true);
        this.ingredientesSelect = new FormControl(true);
      }
    }
  }
  selectIngredient(selectedValue:any){
    this._mealService.filterByMainIngredient(selectedValue.value)
    .subscribe(
      (response) => {
          if (response["meals"]) {
            this.meals=response["meals"];
          }});
  }
  selectArea(selectedValue:any){
    this._mealService.filterByArea(selectedValue.value)
    .subscribe(
      (response) => {
          if (response["meals"]) {
            this.meals=response["meals"];
          }});
  }
  selectCategory(selectedValue:any){
    this._mealService.filterByCategory(selectedValue.value)
    .subscribe(
      (response) => {
          if (response["meals"]) {
            this.meals=response["meals"];
          }});
  }
}
interface Filtro {
  value: string;
  viewValue: string;
}