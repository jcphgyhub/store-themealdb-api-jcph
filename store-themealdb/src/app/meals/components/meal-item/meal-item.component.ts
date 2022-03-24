import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.scss']
})
export class MealItemComponent implements OnInit {
  @Input() meal:any = {};
  foo: any = {};
  @Output() mealSeleccionado: EventEmitter<number>;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.mealSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }
  detail(idMeal:string) {
    this.router.navigateByUrl('/meals', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/meals', idMeal]);
    });
  }
}
