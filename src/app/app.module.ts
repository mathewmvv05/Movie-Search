import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';

import { appRouting } from './app.routing';

import { AppComponent } from './app.component';
import {reducers} from './core/reducers';
import { MovieSearchEffects } from './core/search/search.effects';
import {SearchModule} from './search/searchModule';


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

    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
