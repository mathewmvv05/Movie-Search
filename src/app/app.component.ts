import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import {KeyWordSearchAction} from './core/api.actions';

@Component({
  selector: 'app-root',
  template: `
    <p>Enter the movie name:</p><input #box type="keword" (keyup)="onKey(box.value)">
    <button (click)="testMethod()">Search</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public keyword: string;

  constructor(private _store: Store<any>) {}

  public onKey(value: string) {
    this.keyword = value;
  }

  public testMethod(): void {
    this._store.dispatch(new KeyWordSearchAction(this.keyword));
  }
}
