import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import { KeyWordSearchAction, KEY_WORD_SEARCH } from './api.actions';
import { api } from '../../environments/environment';

@Injectable()
export class MovieSearchEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}

  @Effect()
  public movies: any = this.actions$
    .pipe(
      ofType(KEY_WORD_SEARCH),
      switchMap((action: KeyWordSearchAction) => this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${api.apiKey}&language=en-US&query=${action.payload}&page=1&include_adult=false`))
    );
}
