import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BookComponent} from './book.component';
import {WebComponent} from './web.component';


@NgModule({
  imports: [
    BrowserModule,
    
  ],
  declarations: [
    AppComponent,
    BookComponent,
    WebComponent
    
  ],
  bootstrap: [AppComponent
   ]
})
export class AppModule { }
