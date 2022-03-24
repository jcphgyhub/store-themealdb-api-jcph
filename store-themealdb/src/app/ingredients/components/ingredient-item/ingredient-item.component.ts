import { Component, OnInit,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.scss']
})
export class IngredientItemComponent implements OnInit {
  @Input() ingre:any = {};
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ingrediente(idIngredient:string){
    this.router.navigateByUrl('/ingredients', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/ingredients', idIngredient]);
    });
  }
}
