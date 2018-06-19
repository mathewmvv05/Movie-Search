import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../core/store';
import { skipWhile } from 'rxjs/internal/operators';
import { Observable } from 'rxjs';

import { ISearchResults } from './searchResults.interface';

@Component({
  selector: 'app-search-results',
  template: `
    <!--This template part also could be split into different component in case of unlimited time-->
    <div>
      <div *ngFor="let results of searchResults | async">
        <img class="poster" [src]="'https://image.tmdb.org/t/p/w500/' + results.poster_path">
        <h2>{{results.title}}</h2>
        <p>Release Date: {{results.release_date}}</p>
        <p>Overview: {{results.overview}}</p>
        <p>Language: {{results.original_language}}</p>
        <p>Rating: {{results.vote_average}}</p>
        <hr>
      </div>
    </div>
  `,
  styles: [`
    .poster {
      height: 300px;
      width: 200px;
    }
  `]
})

export class SearchResultComponent implements OnInit {
  constructor(private _store: Store<IStore>) {
  }
  // The variable searchResults is the type of ISearchResults
  // Since we are using switch map in the effects it is Observable
  public searchResults: Observable<ISearchResults[]>;

  ngOnInit() {
    // searchResults is trying to fecth the results from the store if there is any
      this.searchResults = this._store.select(store => store.searchResults)
        .pipe(
          // will be skipped if the store is empty
          skipWhile(data => data === null)
        );
  }
}
