import { Component } from '@angular/core';
<<<<<<< HEAD
import { Platform } from '@ionic/angular';
import { Camera, CameraOptions, DestinationType } from '@ionic-native/camera/ngx';

=======
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController } from '@ionic/angular';
>>>>>>> 4d604b89b304527a47023223c699159f2cb9b55c
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

<<<<<<< HEAD
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
=======
  myPhoto:any;

  constructor(public navCtrl: NavController, private camera:Camera) {}
  
  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    this.myPhoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    // Handle error
    });
  }
}
>>>>>>> 4d604b89b304527a47023223c699159f2cb9b55c
