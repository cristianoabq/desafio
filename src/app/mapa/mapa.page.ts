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

      //  const printCurrentPosition = async () => {
      //        const coordinates = await Geolocation.getCurrentPosition();
      //        this.minhaPosicao = new google.maps.LatLng(coordinates.coords.latitude, coordinates.coords.longitude);
      //  }

    this.exibirMapa();

  }

  exibirMapa(){

    // debugger;

    // const boundingRect = this.mapView.nativeElement.getBoundingClientRect() as DOMRect;
    // console.log("file:mapa.page.ts", boundingRect);

    // CapacitorGoogleMaps.create({
    //   width: Math.round(boundingRect.width),
    //   height: Math.round(boundingRect.height),
    //   x: Math.round(boundingRect.x),
    //   y: Math.round(boundingRect.y),
    //  // latitude: -33.86,
    //  // longitude: 151.20,
    //   zoom: 15,
    //   liteMode: true
    // })

    // CapacitorGoogleMaps.addListener('onMapReady', async() =>{

    //    CapacitorGoogleMaps.addMarker({
    //      latitude: -33.86,
    //      longitude: 151.20,
    //      title: "Custom Title",
    //      snippet: "Custom Snippet",
    //    });

    //   CapacitorGoogleMaps.setMapType({
    //     type: 'normal'
    //   })
    // })

    // this.showCurrentPosition();


     const posicaoParkShopping = new google.maps.LatLng(-15.832225815453715, -47.95561090504061);
     const posicaoParqueCidade = new google.maps.LatLng(-15.798615129558895, -47.90797487326229);
     const posicaoZoologico = new google.maps.LatLng(-15.844344070849587, -47.943309702676);

     const opcoes = {
       center: posicaoParkShopping,
       zoom: 15, //1 - mundo, 5 - continent, 10 - cidade, 15 - rua, 20 - buildings
       disableDefaultUI: true //desabitando recursos do maps
     };
     this.map = new google.maps.Map(this.mapRef.nativeElement, opcoes);

     new google.maps.Marker({
       position: posicaoParqueCidade,
       map: this.map,
       title: "Parque da cidade",
       animation: google.maps.Animation.BOUNCE
     });

     new google.maps.Marker({
       position:posicaoZoologico,
       map: this.map,
       title: "Zoologico",
       animation: google.maps.Animation.BOUNCE
     });

    //  Geolocation.requestPermissions().then(async permission => {
    //     const coordinates =  Geolocation.getCurrentPosition();
    //     console.log(coordinates);
    //       CapacitorGoogleMaps.addMarker({
    //      latitude:(await coordinates).coords.latitude,
    //      longitude: (await coordinates).coords.longitude,
    //      title: 'My location',
    //      snippet: 'come e find me'
    //   });
    //  });


    //this.irParaMinhaPosicao();
  }

  async showCurrentPosition(){
    // Geolocation.requestPermissions().then(async permission => {
    //   const coordinates = await Geolocation.getCurrentPosition();

    //   CapacitorGoogleMaps.addMarker({
    //      latitude:coordinates.coords.latitude,
    //      longitude: coordinates.coords.longitude,
    //      title: 'My location',
    //      snippet: 'come e find me'
    //   });
    // })
  }

  ionViewDidLeave() {
    CapacitorGoogleMaps.close();
  }
  /** Remove map when we have multiple map object */
  // ngOnDestroy() {
  //   //this.map.remove();
  // }

  //  buscarMinhaPosicao(){

  //    this.geolocation.getCurrentPosition(pos => {
  // //     // resp.coords.latitude
  // //     // resp.coords.longitude
  //      let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
  //      this.minhaPosicao = latLng;
  //     }, error  => {
  //       console.log('Error getting location', error);
  //     });
  //  }

  //  irParaMinhaPosicao(){
  //   const printCurrentPosition = async () => {
  //     const coordinates = await Geolocation.getCurrentPosition();

  //     //this.minhaPosicao = coordinates;
  //     //this.map.setCenter(coordinates.coords.);
  //     //this.map.setZoom(15);


  //   };
  //   console.log('Current position:', printCurrentPosition);

  //   const minhaPosicao = new google.maps.LatLng(printCurrentPosition.coords.latitude, printCurrentPosition.coords.longitude);
  //     new google.maps.Marker({
  //       position:minhaPosicao,
  //       map: this.map,
  //       title: "Minha posicao",
  //       animation: google.maps.Animation.DROP
  //     });


  //  }

  // ngOnInit() {
  // }

  // async ionViewDidEnter() {
  //  // const coordinates = await Geolocation.getCurrentPosition();
  //   const printCurrentPosition = async () => {
  //     const coordinates = await Geolocation.getCurrentPosition();

  //     console.log('Current position:', coordinates);
  //     this.setGeoLocation(coordinates.coords.latitude, coordinates.coords.longitude);
  //     console.log('Current position:', coordinates.coords.latitude);
  //   }
  // }

   //setGeoLocation(latitude, longitude) {
  //   console.log(`LAT: ${latitude} - LON: ${longitude}`);

  //   this.map = Leaflet.map('mapId').setView([latitude, longitude], 15);

  //   Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: 'Cristiano',
  //   }).addTo(this.map);

  //   Leaflet.marker([latitude, longitude]).addTo(this.map).bindPopup('Minha localização').openPopup();

 //  }


  // ngOnDestroy() {
  //   this.map.remove();
  // }

}
