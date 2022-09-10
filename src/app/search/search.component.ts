import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {KeyWordSearchAction} from '../core/search/search.actions';
import {IStore} from '../core/store';

@Component({
  selector: 'app-search',
  template: `
      <!--This template part could be done better incase of unlimited time-->
      <mat-toolbar>
          <div class="mat-toolbar-center">Movie Search Engine</div>
      </mat-toolbar>
      <div>
          <div>
              <form class="example-form">
                  <mat-form-field class="example-full-width">
                      <input matInput #box type="text" (keyup)="onKey(box.value)" placeholder="Please enter a movie name...">
                  </mat-form-field>
              </form>
          </div>
          <div class="mat-button-center">
              <button mat-raised-button color="primary" (click)="search()">Search</button>
          </div>
      </div>
      <div>
          <app-search-results></app-search-results>
      </div>
  `,
  styles: [
      `
      .example-form {
          width: 50%;
          padding-top: 15%;
          margin: auto;
      }
      .example-full-width {
          width: 100%;
      }
      .mat-toolbar-center {
          margin: auto;
          padding: 10px;
          color: gray;
      }
      .mat-button-center {
        text-align: center;
      }
    `
  ]
})
export class SearchComponent {

  // Variable for getting the keyword from user input
  public keyword: string;

  constructor(private _store: Store<IStore>) {
  }

  // Method for getting the user input
  public onKey(value: string) {
    this.keyword = value;
  }

  // Method that dispatch the KeyWordSearchAction with user input keyword
  public search(): void {
    this._store.dispatch(new KeyWordSearchAction(this.keyword));
  }

}
