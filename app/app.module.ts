import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BookComponent} from './book.component';
import {WebComponent} from './web.component';
import {OrderListComponent} from './orders/order-list.component';


@NgModule({
  imports: [
    BrowserModule,
    
  ],
  declarations: [
    AppComponent,
    BookComponent,
    WebComponent,
    OrderListComponent
    
  ],
  bootstrap: [AppComponent
   ]
})
export class AppModule { }
