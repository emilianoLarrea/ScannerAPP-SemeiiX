import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Http } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { JuevesPage } from '../jueves/jueves';
import {ViernesPage} from '../viernes/viernes';
import {SabadoPage} from '../sabado/sabado';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController,public http: Http, private statusBar: StatusBar, private screenOrientation: ScreenOrientation ) {
    this.statusBar.show();
    this.statusBar.styleDefault();
    this.statusBar.overlaysWebView(true);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
     

  }
  

  goJueves():void{
    this.navCtrl.push(JuevesPage);
  } 
  goViernes():void{
    this.navCtrl.push(ViernesPage);
  } 
  goSabado():void{
    this.navCtrl.push(SabadoPage);
  } 
  
}
