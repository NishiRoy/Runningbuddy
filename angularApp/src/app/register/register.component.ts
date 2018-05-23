import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _httpservice:HttpService,private _route:Router) { }

  user:any;

  ngOnInit() {

    this.user={name:'',email:'',password:'',cpassword:'',lat:'',long:''};

  }

  OnSubmit(event){
      event.preventDefault();
      console.log(this.user);

      let temp=this._httpservice.register_user(this.user);

      temp.subscribe(data=>{
        console.log("returned this",data);
        localStorage.setItem('token',data['token'])
        this._route.navigate(['/home']);
      })
  }
}
