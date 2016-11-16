import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  
  public todo = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     if(navParams.get('item')){
       this.todo = navParams.get('item');
     }  
  }

  goBack(){
    this.todo = {};
    this.navCtrl.pop();
  }



}
