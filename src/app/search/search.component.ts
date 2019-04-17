import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {KeyWordSearchAction} from '../core/search/search.actions';
import {IStore} from '../core/store';

@Component({
  selector: 'app-search',
  template: `
    <!--This template part could be done better incase of unlimited time-->
    
    <input matInput #box type="text" (keyup)="onKey(box.value)" placeholder="Enter The Movie Name">
    <button mat-button color="primary" (click)="search()">Search</button>
    <div>
        <app-search-results></app-search-results>
    </div>
  `,
  styles:[
    `
    .example-form {
      min-width: 150px;
      max-width: 500px;
      width: 100%;
    }
    
    .example-full-width {
      width: 50%;
    }
    `
  ]
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
