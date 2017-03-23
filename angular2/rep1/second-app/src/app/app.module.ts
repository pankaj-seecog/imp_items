import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventbindingComponent } from './eventbinding.component';
import { ExternalbindingComponent } from './externalbinding.component';
import { CustomeventComponent } from './customevent.component';

@NgModule({
  declarations: [
    AppComponent,
    EventbindingComponent,
    ExternalbindingComponent,
    CustomeventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
