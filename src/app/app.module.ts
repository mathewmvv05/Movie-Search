import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { appRouting } from './app.routing';
import { reducers } from './core/reducers';

import { AppComponent } from './app.component';
import { MovieSearchEffects } from './core/search/search.effects';
import { SearchModule } from './search/searchModule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    EffectsModule.forRoot([
      MovieSearchEffects
    ]),
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot(reducers),
    SearchModule,
    BrowserAnimationsModule,

    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
