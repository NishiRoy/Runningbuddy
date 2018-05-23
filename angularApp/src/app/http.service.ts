import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  loggedIn(){
    return !!localStorage.getItem('token');
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
}
