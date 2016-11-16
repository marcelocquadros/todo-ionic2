import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Todo } from '../../model/todo';

@Component({
  selector: 'page-addItem',
  templateUrl: 'add-item.html'
})
export class AddItemPage {

  public todo: Todo;
  public isEditing = false;
  public title = null; 

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams) {
    if(!this.navParams.get('item')){
      this.todo = new Todo(null,null);
    } else {
      this.todo = this.navParams.get('item');
      this.isEditing = true;
    }
    this.title = this.isEditing ? 'Edit Item' : 'Add New Item';
  }

  public save(){
    if(!this.todo.title  || !this.todo.description ){
      return;
    }
    if(this.isEditing){

      let index = 0;
      if(this.navParams.get('index')){
       index = this.navParams.get('index');
      }
      this.navParams.get('listPage').update(this.todo, index);

    } else {

      this.navParams.get('listPage').saveItem(this.todo);

    }
    this.todo = new Todo(null,null);
    this.navCtrl.pop();
  }

}
