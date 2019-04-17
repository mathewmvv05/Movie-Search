import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

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
    MatButtonModule
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
