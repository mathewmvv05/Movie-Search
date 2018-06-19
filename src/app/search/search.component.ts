import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {KeyWordSearchAction} from '../core/search/search.actions';
import {IStore} from '../core/store';

@Component({
  selector: 'app-search',
  template: `
    <!--This template part could be done better incase of unlimited time-->
    <div>
      <h1>Movie Search Engine</h1>
      <p>Enter the movie name:<input #box type="text" (keyup)="onKey(box.value)">
      <button (click)="search()">Search</button></p>
    </div>
    <div>
      <app-search-results></app-search-results>
    </div>
  `
})
export class SearchComponent {

  // Variable for getting the keyword from user input
  public keyword: string;

  constructor(private _store: Store<IStore>) {}

  // Method for getting the user input
  public onKey(value: string) {
    this.keyword = value;
  }

  // Method that dispatch the KeyWordSearchAction with user input keyword
  public search(): void {
    this._store.dispatch(new KeyWordSearchAction(this.keyword));
  }

}
