import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import { searchRouting } from './search.routing';

import { SearchComponent } from './search.component';
import { SearchResultComponent } from './searchResult.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    searchRouting,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule
  ],
  declarations: [
    SearchComponent,
    SearchResultComponent
  ],
  exports: [
  ]
})
export class SearchModule {
}
