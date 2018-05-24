import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient,private route:Router) { }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }

  getUser(id){
      return this._http.get('/user/'+id);
  }

  postStuff(values){
    console.log("Here I am",values);
    return this._http.post('/test/book',values);
  }

  getStuff(){
    return this._http.get('/books');
  }

  register_user(user){
    return this._http.post('/registration/user',user);
  }

  login_user(user){
    return this._http.post('/login/user',user);
  }

  getusers(){
     return this._http.get('/users');
  }
}
