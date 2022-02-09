import { Component,  OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
import { Geolocation } from '@capacitor/geolocation';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})

//implements OnInit, OnDestroy
export class MapaPage  {

  //map: Leaflet.Map;
  map: google.maps.Map;
  minhaPosicao: google.maps.LatLng;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  //@ViewChild('map') mapView:ElementRef;

  //constructor(private geolocation: Geolocation) { }
  constructor(){}

 // ngOnInit() { }

  async ionViewDidEnter(){

    // const printCurrentPosition = async () => {
              const coordinates = await Geolocation.getCurrentPosition();
              this.minhaPosicao = new google.maps.LatLng(coordinates.coords.latitude, coordinates.coords.longitude);
              console.log('minha posicao - ' + coordinates.coords.latitude);
     //   }
      
    this.exibirMapa();

  }

  exibirMapa(){

     const posicaoParkShopping = new google.maps.LatLng(-15.832225815453715, -47.95561090504061);
     const posicaoParqueCidade = new google.maps.LatLng(-15.798615129558895, -47.90797487326229);
     const posicaoZoologico = new google.maps.LatLng(-15.844344070849587, -47.943309702676);

     const opcoes = {
       center: posicaoParkShopping,
       zoom: 10 , //1 - mundo, 5 - continent, 10 - cidade, 15 - rua, 20 - buildings
       disableDefaultUI: true //desabitando recursos do maps
     };
     this.map = new google.maps.Map(this.mapRef.nativeElement, opcoes);

     new google.maps.Marker({
       position: posicaoParqueCidade,
       map: this.map,
       title: "Parque da cidade",
       animation: google.maps.Animation.DROP
     });

     new google.maps.Marker({
       position:posicaoZoologico,
       map: this.map,
       title: "Zoologico",
       animation: google.maps.Animation.DROP
     });

     new google.maps.Marker({
      position:this.minhaPosicao,
      map: this.map,
      title: "Minha posicao",
      animation: google.maps.Animation.BOUNCE
    });
 
  }  

}
