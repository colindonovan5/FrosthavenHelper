import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { ScenarioComponent } from './components/scenario/scenario.component';
import { MonsterCardComponent } from './components/monster-card/monster-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopToolbarComponent } from './components/top-toolbar/top-toolbar.component';
import { BottomToolbarComponent } from './components/bottom-toolbar/bottom-toolbar.component';
import { MonsterAbilityCardComponent } from './components/monster-ability-card/monster-ability-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MonsterStatCardComponent } from './components/monster-stat-card/monster-stat-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    ScenarioComponent,
    MonsterCardComponent,
    TopToolbarComponent,
    BottomToolbarComponent,
    MonsterAbilityCardComponent,
    MonsterStatCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
