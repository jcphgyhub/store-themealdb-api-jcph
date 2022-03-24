import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http:HttpClient) { }
  public listIngredients():Observable<any>{
    let url='https://www.themealdb.com/api/json/v1/1/list.php?i=list';
    return this.http.get(url);
  }
}
