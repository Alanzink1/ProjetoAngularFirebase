import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { FooterModule } from '../shared/components/footer/footer.module';
import { BannerModule } from '../shared/components/banner/banner.module';
import { GaleriaModule } from '../shared/components/galeria/galeria.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    BannerModule,
    GaleriaModule,
    FooterModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
