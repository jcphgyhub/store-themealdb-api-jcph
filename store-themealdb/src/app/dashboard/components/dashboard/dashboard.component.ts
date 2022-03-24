import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { MealService } from '../../../meals/services/meal.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  meal:any={};
  content:any;
  constructor(private router:Router,
    private modalService: NgbModal,
    private activatedRoute:ActivatedRoute,
    private _mealService:MealService,) {
    this._mealService.getRandomMeal().
    subscribe(
      (response) => {
          if (response["meals"]) {
            this.meal = response["meals"][0];
            //this.modalService.open(this.content);
          }});
  }

  openModal(content:any) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop', size: 'xl',  centered: true, scrollable: true  });
  }
  ngOnInit(): void {
  }
}
