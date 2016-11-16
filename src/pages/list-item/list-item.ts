import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { DetailPage } from '../detail/detail';
import { Todo } from '../../model/todo';

import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-listItem',
  templateUrl: 'list-item.html'
})
export class ListItemPage {

  public todos :Todo[] = new Array();

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    
  }

 public openAddPage(): void{
    this.navCtrl.push(AddItemPage,{listPage: this, edit: false});
  }

  public saveItem(item){
    
    this.todos.push(item);
    this.showMessage('Todo add successfully');
  }
  
  public showMessage(message: string){
     let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  public remove(slidingItem,item): void{
    if(slidingItem){
      slidingItem.close();
    }
    let index = this.todos.indexOf(item);
    this.todos.splice(index,1);
    this.showMessage('Removed successfully');
  }

  public edit(slidingItem,item): void{
    if(slidingItem){
      slidingItem.close();
    }
    let index = this.todos.indexOf(item);
    this.navCtrl.push(AddItemPage, {
        listPage: this, 
        item: item, 
        index: index
    });
  }

  public update(item,index): void{
    this.todos[index] = item;
    this.showMessage('Updated successfully');
  }

  public showDetail(item){
    this.navCtrl.push(DetailPage,{item: item});
  }

}
