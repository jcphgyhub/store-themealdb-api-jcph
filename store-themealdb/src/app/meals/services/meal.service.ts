import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MealService {
  constructor(private http:HttpClient) { }
  public getMealsByFirstLetter(letra:string):Observable<any>{
    let url='https://www.themealdb.com/api/json/v1/1/search.php?f='+letra;
    return this.http.get(url);
  }
  public getMealById(id:string):Observable<any>{
    let url='https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id;
    return this.http.get(url);
  }
  public getRandomMeal():Observable<any>{
    let url='https://www.themealdb.com/api/json/v1/1/random.php';
    return this.http.get(url);
  }
  public searchMeal(nombre:string):Observable<any>{
    let url='https://www.themealdb.com/api/json/v1/1/search.php?s='+nombre;
    return this.http.get(url);
  }
  public getCategories():Observable<any>{
    let url='https://www.themealdb.com/api/json/v1/1/categories.php';
    return this.http.get(url);
  }
  public filterByMainIngredient(ingredient:string):Observable<any>{
    let url='https://www.themealdb.com/api/json/v1/1/filter.php?i='+ingredient;
    return this.http.get(url);
  }
  public filterByCategory(category:string):Observable<any>{
    let url='https://www.themealdb.com/api/json/v1/1/filter.php?c='+category;
    return this.http.get(url);
  }
  public filterByArea(area:string):Observable<any>{
    let url='https://www.themealdb.com/api/json/v1/1/filter.php?a='+area;
    return this.http.get(url);
  }
  public listCategories():Observable<any>{
    let url='https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    return this.http.get(url);
  }
  public listArea():Observable<any>{
    let url='https://www.themealdb.com/api/json/v1/1/list.php?a=list';
    return this.http.get(url);
  }
}
