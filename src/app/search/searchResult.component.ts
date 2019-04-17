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
    
    <div class="testing123">
      <mat-card *ngFor="let results of searchResults | async" class="example-card">
      <mat-card-header>
        <mat-card-title>{{results.title}}</mat-card-title>
        <mat-card-subtitle>{{results.release_date}}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image [src]="'https://image.tmdb.org/t/p/w500/' + results.poster_path">
      <mat-card-content>
        <p>Overview: {{results.overview}}</p>
        <p>Language: {{results.original_language}}</p>
        <p>Rating: {{results.vote_average}}</p>
      </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .poster {
      height: 300px;
      width: 200px;
    }
    .example-card {
      max-width: 400px;
      margin: 10px;
    }
    .testing123 {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
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
