import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  username:string='';
  constructor(private router:Router,
    private cookieService: CookieService) {  }

  ngOnInit(): void {
    this.username = this.cookieService.get('name') + this.cookieService.get('surname');
  }
  
  logout(): void {  
    this.router.navigate(['/login']);  
    this.cookieService.deleteAll();  
  } 
}
