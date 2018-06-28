import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { PERSONAJES } from '../../data/personajes.data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  personajes: any[] = PERSONAJES;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

irDetalle(person:any){
	console.log(person);
	let details: any 	   = DetailsPage;
	this.navCtrl.push(details, {personaje: person});
}

}
