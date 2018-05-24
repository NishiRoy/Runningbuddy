import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  title = 'Test Google Maps';

  latitude:any;
  longitude:any;
  values:any;

  isTracking = false;

  currentLat: any;
  currentLong: any

  iconBase="https://maps.google.com/mapfiles/kml/shapes/";

  markerTypes=[
    {
      text : "Parking",value:"parking_lot_maps.png"
    }
  ];

  selectedMarkerType: string="info-i_maps.png";
  locations:any;

  logged_in:any;
  currentUser:any;

  constructor(private _httpService:HttpService,private route:Router,private _router:ActivatedRoute){}


  ngOnInit(){

    this.currentUser='';  

    this.logged_in=this._router.snapshot.paramMap.get('id');

    this.logged();

    this.getUsers();
  

  }

  logged(){

    let temp=this._httpService.getUser(this.logged_in);

    temp.subscribe(data=>{
      console.log("Logged in User is",data);
      this.currentUser=data[0];
    })

  }

  getUsers(){


    let temp=this._httpService.getusers();

    temp.subscribe(data=>{
      // console.log(data)
      this.locations=this.convertToMapPoints(data);
      console.log('hello',this.locations);
      let value=google.maps.MapTypeId.ROADMAP;
      this.initialiseMap(value);
    });
  }

  convertToMapPoints(data){

    this.locations=[];

    for(var i=0;i<data.length;i++){

      let user=data[i];

      let contentString=
      '<p><b>User Name :'+user.name+
      '<br/><b> Email :'+user.email+
      '</p>';

      if(this.currentUser.id!=user.id){
      this.locations.push({
        latlon:new google.maps.LatLng(user.latitude,user.longitude),
        message: new google.maps.InfoWindow({
          content:contentString,
          maxWidth:300
        }),
        username:user.name,
        email:user.email
      });
    }
  }

    return this.locations;
    
  }


  initialiseMap(type){

      console.log("values ",type);

       let map=new google.maps.Map(document.getElementById('gmap'),{
        zoom:12,
        center:new google.maps.LatLng(this.currentUser.latitude,this.currentUser.longitude),
        mapTypeId:type,
      })
    

    this.locations.forEach(function(item){
      var marker= new google.maps.Marker({
        position:item.latlon,
        map:map,
        title:'User Map',
        icon:'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      });

      google.maps.event.addListener(marker,'click',function(e){
        let currentSelectedMarker=item;
        item.message.open(map,marker);
      })
    })


    var initialLocation = new google.maps.LatLng(this.currentUser.latitude,this.currentUser.longitude);
    var marker = new google.maps.Marker({
        position: initialLocation,
        animation: google.maps.Animation.BOUNCE,
        map: map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });


    new google.maps.Circle({
      center: new google.maps.LatLng(this.currentUser.latitude,this.currentUser.longitude),
      radius: 1 * 1000,       // Convert to meters
      fillColor: '#FF0000',
      fillOpacity: 0.2,
      map: map
   });

   let pointA=new google.maps.LatLng(this.currentUser.latitude,this.currentUser.longitude);

   new google.maps.Marker({
    position: this.destinationPoint(pointA,90, 1),
    map: map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
  });
  }


toRad(num) {
    return num*(Math.PI / 180);
 }
 
 toDeg(num){
    return num* 180 / Math.PI;
 }
 
 destinationPoint(pointA,brng, dist) {
    dist = dist / 6371;  
    brng = this.toRad(brng);  
 
    var lat1 = this.toRad(pointA.lat()), lon1 = this.toRad(pointA.lng());
 
    var lat2 = Math.asin(Math.sin(lat1) * Math.cos(dist) + 
                         Math.cos(lat1) * Math.sin(dist) * Math.cos(brng));
 
    var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(dist) *
                                 Math.cos(lat1), 
                                 Math.cos(dist) - Math.sin(lat1) *
                                 Math.sin(lat2));
 
    if (isNaN(lat2) || isNaN(lon2)) return null;
 
    return new google.maps.LatLng(this.toDeg(lat2), this.toDeg(lon2));
 }

 drawCircle(){
  
 }

 editProfile(id){
   console.log("Editing shit");

  //  this.route.navigate(['/edit/',id]);

 }

 editSchedule(id){

  // this.route.navigate(['/editschedule',id]);

 }

 addLocations(id){

  // this.route.navigate(['/gorunning',id]);

 }

 logoutUser(){
  this.currentUser='';
  this.logged_in='';
  this._httpService.logout();
}

findMe() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.showPosition(position);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

showPosition(position) {
  this.currentUser.latitude = position.coords.latitude;
  this.currentUser.longitude = position.coords.longitude;
  if(confirm("Would you like to store this location for Future Use?")){
    console.log("Saving it");
    let values={latitude:position.coords.latitude,longitude:position.coords.longitude,user_id:this.logged_in}
    let temp=this._httpService.addAdress(values);

    temp.subscribe(data=>console.log(data));
  }
  else{
    console.log("Not saving it");
  }
  

  this.initialiseMap('roadmap');
}

trackMe() {
  if (navigator.geolocation) {
    this.isTracking = true;
    navigator.geolocation.watchPosition((position) => {
      this.showTrackingPosition(position);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

showTrackingPosition(position) {
  console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
  this.currentUser.latitude = position.coords.latitude;
  this.currentUser.longitude= position.coords.longitude;

  // this.initialiseMap('roadmap');
}
}



