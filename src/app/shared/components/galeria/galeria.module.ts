import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from './galeria.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    GaleriaComponent
  ]
})
export class GaleriaModule { }
