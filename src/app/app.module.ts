import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MissioncontrolComponent } from './missioncontrol/missioncontrol.component';
import { AstronautComponent } from './astronaut/astronaut.component';

@NgModule({
  declarations: [
    AppComponent,
    MissioncontrolComponent,
    AstronautComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
