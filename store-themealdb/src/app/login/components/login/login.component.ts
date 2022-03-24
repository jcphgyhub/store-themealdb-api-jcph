import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';  
import { LoginService } from '../../services/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Obj: any={
    "user":"",
    "password":""
  };
  errorMessage:any={};
  loading:boolean=true;
  message:string='';
  constructor(private router:Router,
    private cookieService: CookieService,
    private _loginService:LoginService) { }

  ngOnInit(): void {
  }
  iniciarSesion(Obj:any){
    let dataUser:any;
    dataUser = this._loginService.login(Obj);;
    
    if((dataUser.user===Obj.user)&&(dataUser.password===Obj.password)){
      this._loginService.isloggedin = true;
      this.onsubmit(dataUser);
    } else{
      this._loginService.isloggedin = false;
    }
  }
  onsubmit(dataUser:any): void {  
    this.cookieService.set('user', dataUser.user);
    this.cookieService.set('password', dataUser.password);
    const a = dataUser;
    if (this._loginService.isloggedin == true) {
      this.router.navigate(['/dashboard']);
    }  
  }
}
