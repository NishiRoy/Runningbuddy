import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _httpservice:HttpService,private _router:Router){}

  canActivate():boolean {
    if(this._httpservice.loggedIn()){
      return true;
    }
    else{
      this._router.navigate(['/login']);
      return false;
    }
  }
}
