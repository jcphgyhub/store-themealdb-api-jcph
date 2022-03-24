import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private router:Router,
    private cookieService: CookieService) { }

  ngOnInit(): void {
  }
  logout(): void {  
    this.router.navigate(['/login']);  
    this.cookieService.deleteAll();  
  } 
}
