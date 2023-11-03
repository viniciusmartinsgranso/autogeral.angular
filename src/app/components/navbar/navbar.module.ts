import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {NavbarComponent} from "./navbar.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    IonicModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
