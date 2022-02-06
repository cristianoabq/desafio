import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private menu: MenuController) { }

  // openFirst() {
  //   this.menu.enable(true, 'start');
  //   this.menu.open('start');
  // }

  public appPages = [
    { title: 'App 1', url: '/camera', icon: 'camera' },
    { title: 'App 2', url: '/mapa', icon: 'earth' },
    { title: 'App 3', url: '/chat', icon: 'person' },

  ];
 //constructor() {}
}
