import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  title = 'Test Google Maps';

  @ViewChild('gmap') gmapElement:any;
  map:google.maps.Map;

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

  constructor(private _httpService:HttpService){}

  ngOnInit(){

    let mapProp={
      center:new google.maps.LatLng(47.609859,-122.196615),
      zoom:15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

   this.initMap(mapProp);
    // this.getThings();

  }
  initMap(mapProp){
    this.map=new google.maps.Map(document.getElementById('gmap'),mapProp);
    }

  setMapType(mapTypeId:string){
    this.map.setMapTypeId(mapTypeId)
  }

  setCenter(){
    this.map.setCenter(new google.maps.LatLng(this.latitude,this.longitude));

    let location = new google.maps.LatLng(this.latitude,this.longitude);

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


}
