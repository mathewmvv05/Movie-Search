import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IStore} from '../core/store';
import {ISearchResults} from './searchResults.interface';
import {skipWhile} from 'rxjs/internal/operators';
import {Observable} from "rxjs";

@Component({
  selector: 'app-search-results',
  template: `
    <div>
      <div *ngFor="let results of searchResults | async">
        <h2>{{results.title}}</h2>
        <img [src]="'https://image.tmdb.org/t/p/w500/' + results.posterPath" alt="">
      </div>
    </div>
  `
})

export class SearchResultComponent implements OnInit {
  constructor(private _store: Store<IStore>) {
  }
  public searchResults: Observable<ISearchResults[]>;

  ngOnInit() {
      this.searchResults = this._store.select(store => store.searchResults)
        .pipe(
          skipWhile(data => data === null)
        );
  }
}
