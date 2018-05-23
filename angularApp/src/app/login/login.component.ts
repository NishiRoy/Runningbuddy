import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../http.service';
import {Router} from '@angular/router';
import '../../assets/login-animation.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _httpservice:HttpService,private _route:Router) { }

 user:any;
 email:string;
 password:string;

  ngOnInit(){

  }

  ngAfterViewInit() {

    (window as any).initialize();

    this.email='';
    this.password='';

  }

  login(event){

    event.preventDefault();
    console.log(this.email,this.password);

    this.user={
      lemail:this.email,
      lpassword:this.password,
    }

    let temp=this._httpservice.login_user(this.user);

    temp.subscribe(data=>{
      console.log("Logged in user",data);
      localStorage.setItem('token',data['token'])
      this._route.navigate(['/home']);
    })
  }


}
