import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FilterPipe } from './filter.pipe';
import { HighDirective } from './high.directive';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
     AppComponent , FilterPipe, HighDirective, ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
