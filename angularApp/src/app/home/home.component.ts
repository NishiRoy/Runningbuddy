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

  @ViewChild('gmap') gmapElement:any;

  map = new google.maps.Map(document.getElementById('gmap'))

  latitude:any;
  longitude:any;
  values:any;

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

    // let mapProp={
    //   center:new google.maps.LatLng(47.609859,-122.196615),
    //   zoom:15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };

    this.logged();

    this.getUsers();
    

   
    // this.getThings();

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

      // console.log(user.latitude,user.longitude);
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
    // this.map=new google.maps.Map(document.getElementById('gmap'),mapProp);

      console.log("values ",type);

       let map=new google.maps.Map(document.getElementById('gmap'),{
        zoom:12,
        center:new google.maps.LatLng(this.currentUser.latitude,this.currentUser.longitude),
        mapTypeId:type,
      })
    

    this.locations.forEach(function(item){
      // console.log('item',item);
      var marker= new google.maps.Marker({
        position:item.latlon,
        map:map,
        title:'User Map',
        icon:'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      });
      console.log('marker',marker);
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


  setMapType(maptype:string){
    // this.map.setMapTypeId(mapTypeId);
    // this.mapTypeId=google.maps.MapTypeId.maptype;
  }

  setCenter(){
    this.map.setCenter(new google.maps.LatLng(this.latitude,this.longitude));

    let location = new google.maps.LatLng(this.latitude,this.longitude);

    console.log("This is what it looks like",location);

    let marker=new google.maps.Marker({
      position:location,
      map:this.map,
      title:'Nobody!'
    });

    marker.addListener('click', this.simpleMarkerHandler);

    marker.addListener('click',()=>{
      this.markerHandler(marker);
    });

  }

  simpleMarkerHandler() {
    alert('Simple Component\'s function...');
  }

  markerHandler(marker: google.maps.Marker) {
    alert('Marker\'s Title: ' + marker.getTitle());
  }

  
  showCustomMarker() {


    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

    let location = new google.maps.LatLng(this.latitude, this.longitude);

    console.log(`selected marker: ${this.selectedMarkerType}`);
    
    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: this.iconBase + this.selectedMarkerType,
      title: 'Got you!'
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

   this.route.navigate(['/edit',id]);

 }

 editSchedule(id){

  this.route.navigate(['/editschedule',id]);

 }

 addLocations(id){

  this.route.navigate(['/gorunning',id]);

 }

 logoutUser(){
  this.currentUser='';
  this.logged_in='';
  this._httpService.logout();
}


}
