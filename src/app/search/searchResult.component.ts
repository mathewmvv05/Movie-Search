import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IStore} from '../core/store';
import {ISearchResults} from './searchResults.interface';
import {skipWhile} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-search-results',
  template: `
    <div>
      <div *ngFor="let results of searchResults | async">
        <img class="poster" [src]="'https://image.tmdb.org/t/p/w500/' + results.poster_path">
        <h2>{{results.title}}</h2>
        <p>Release Date: {{results.release_date}}</p>
        <p>Over View: {{results.overview}}</p>
        <p>language: {{results.language}}</p>
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
  public searchResults: Observable<ISearchResults[]>;

  ngOnInit() {
      this.searchResults = this._store.select(store => store.searchResults)
        .pipe(
          skipWhile(data => data === null)
        );
  }
}
