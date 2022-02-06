import { Storage } from '@capacitor/storage';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-camera',
  templateUrl: 'camera.page.html',
  styleUrls: ['camera.page.scss'],
})
export class CameraPage {

  photo: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  async takePhoto(){


    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      saveToGallery: true,
      source: CameraSource.Camera
    });
    var imageUrl = image.dataUrl;
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (imageUrl));
  }

}
