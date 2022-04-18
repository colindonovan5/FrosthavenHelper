import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CharacterCardComponent } from './character-card/character-card.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { MonsterCardComponent } from './monster-card/monster-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    ScenarioComponent,
    MonsterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
