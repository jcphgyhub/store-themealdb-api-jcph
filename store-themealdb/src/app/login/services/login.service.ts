import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  postId:any;
  errorMessage:any;
  isloggedin:boolean=false;
  constructor() { }
  public login(user:any):any{
    return {
      "user":"admin",
      "password":"root"
    };
  }
}
