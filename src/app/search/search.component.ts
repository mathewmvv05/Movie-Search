import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {KeyWordSearchAction} from '../core/api.actions';
import {IStore} from '../core/store';

@Component({
  selector: 'app-search',
  template: `
    <div>
      <h1>Movie Search Engine</h1>
      <p>Enter the movie name:<input #box type="text" (keyup)="onKey(box.value)">
      <button (click)="testMethod()">Search</button></p>
    </div>
    <div>
      <app-search-results></app-search-results>
    </div>
  `
})
export class SearchComponent {

  public keyword: string;

  constructor(private _store: Store<IStore>) {}

  public onKey(value: string) {
    this.keyword = value;
  }

  public testMethod(): void {
    this._store.dispatch(new KeyWordSearchAction(this.keyword));
  }

}
