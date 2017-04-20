import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { TelevisionComponent } from './television/television.component';
import { RadioComponent } from './radio/radio.component';
import { MicrovanComponent } from './microvan/microvan.component';
import { AcComponent } from './ac/ac.component';
import { OutinputComponent } from './outinput/outinput.component';
import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding.component';
import { LifeprocessComponent } from './lifeprocess.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    RefrigeratorComponent,
    TelevisionComponent,
    RadioComponent,
    MicrovanComponent,
    AcComponent,
    OutinputComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    LifeprocessComponent
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
