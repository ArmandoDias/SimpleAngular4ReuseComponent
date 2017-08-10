import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdToolbarModule, MdIconModule, MdInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';
import { TeamComponent } from './control/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
