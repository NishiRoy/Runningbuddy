import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  logged_in:any;
  user:any;

  constructor(private _httpService:HttpService,private route:Router,private _router:ActivatedRoute) { }

  ngOnInit() {

    this.user={Name:'',Age:'',Average_Speed:'',Average_distance:''};

    this.logged_in=this._router.snapshot.paramMap.get('id');

    this.getUserData();
  }

  getUserData(){
    let temp=this._httpService.getUser(this.logged_in);

    temp.subscribe(data=>{

      this.user=data[0];
      console.log(this.user);
    })
  }

  OnSubmit(event){
    event.preventDefault();

    let temp=this._httpService.updateUser(this.logged_in,this.user);

    temp.subscribe(data=>console.log(data));
  }


}
