import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {KeyWordSearchAction} from '../core/api.actions';
import {IStore} from '../core/store';

@Component({
  selector: 'app-search',
  template: `
    <p>Enter the movie name:</p><input #box type="text" (keyup)="onKey(box.value)">
    <button (click)="testMethod()">Search</button>
    <app-search-results></app-search-results>
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
