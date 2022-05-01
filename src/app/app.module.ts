import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './inicio/app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSliderModule],
  declarations: [AppComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
