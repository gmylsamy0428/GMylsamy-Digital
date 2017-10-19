import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {BookComponent} from './book.component';
import {WebComponent} from './web.component';
import {OrderListComponent} from './orders/order-list.component';
import {OrderFilterPipe} from './orders/order-filter.pipe';
import {StarComponent} from './shared/star.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  declarations: [
    AppComponent,
    BookComponent,
    WebComponent,
    OrderListComponent,
    OrderFilterPipe,
    StarComponent
    
  ],
  bootstrap: [AppComponent
   ]
})
export class AppModule { }
