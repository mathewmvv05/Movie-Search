import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { searchRouting } from './search.routing';

import { SearchComponent } from './search.component';
import { SearchResultComponent } from './searchResult.component';

@NgModule({
  imports: [
    CommonModule,
    searchRouting
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
