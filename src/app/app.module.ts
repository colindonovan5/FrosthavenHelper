import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CharacterCardComponent } from './character-card/character-card.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { MonsterCardComponent } from './monster-card/monster-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { BottomToolbarComponent } from './bottom-toolbar/bottom-toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    ScenarioComponent,
    MonsterCardComponent,
    TopToolbarComponent,
    BottomToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
