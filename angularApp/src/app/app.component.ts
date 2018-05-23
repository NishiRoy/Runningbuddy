import { Component,OnInit, ViewChild } from '@angular/core';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { } from '@types/googlemaps';
// import '../assets/login-animation.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _httpService:HttpService){}

  values:any;
  
  ngOnInit(){
    
  }

  getThings(){

    let temp=this._httpService.getStuff();

    temp.subscribe(data=>console.log(data));

    this.postThings();
  }

  postThings(){

    this.values={
      author:'Tom Clancy',
      books_name:'SomeBook',
    }

    console.log(this.values);

    let temp=this._httpService.postStuff(this.values);

    temp.subscribe(data=>console.log('data'))



  }
}
