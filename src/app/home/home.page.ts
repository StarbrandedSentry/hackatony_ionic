import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Camera, CameraOptions, DestinationType } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private camera: Camera, private platform: Platform) {}

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  takePicture(){ 
    if(this.platform.is('cordova')){
      this.camera.getPicture(this.options).then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        console.log('something went wrong with the camera');
      });
    }
  }
}
