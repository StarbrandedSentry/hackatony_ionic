import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { CameraPage } from './camera/camera.page';
import { MapPage } from './map/map.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          { path: '', redirectTo: 'camera', pathMatch: 'full'},
          { path: 'camera', loadChildren: './camera/camera.module#CameraPageModule' },
          { path: 'map', loadChildren: './map/map.module#MapPageModule' }
        ]
      }
    ])
  ],
  declarations: [HomePage ]
})
export class HomePageModule {}
