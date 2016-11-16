import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListItemPage } from '../pages/list-item/list-item';
import { AddItemPage } from '../pages/add-item/add-item';
import { DetailPage } from '../pages/detail/detail';

@NgModule({
  declarations: [
    MyApp,
    ListItemPage,
    AddItemPage,
    DetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListItemPage,
    AddItemPage,
    DetailPage
  ],
  providers: []
})
export class AppModule {}
