import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RadioProvider } from '../../providers/radio/radio'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  radios: any;

  constructor(public navCtrl: NavController, private radioProvider: RadioProvider) {

  }

  ionViewDidLoad(){
    this.radioProvider.all().then((data: any) => {
      this.radios = data;
    });
    console.log(this.radios);
  }

}
