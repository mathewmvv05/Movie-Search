import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { catchError, map } from 'rxjs/internal/operators';

import { KeyWordSearchAction, KeyWordSearchSuccessAction, KEY_WORD_SEARCH } from './search.actions';
import { api } from '../../../environments/environment';
import { IResult } from '../../search/result.interface';

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
      switchMap((action: KeyWordSearchAction) =>
        // Once the KEY_WORD_SEARCH type action is dispatched the below http reuest is made
        this.http.get<IResult>(`https://api.themoviedb.org/3/search/movie?api_key=${api.apiKey}&language=en-US&query=${action.payload}&page=1&include_adult=false`)
        .pipe(
          // On success of above http request KeyWordSearchSuccessAction action dispatched
          // with the payload from above request
          map((payload) => new KeyWordSearchSuccessAction(payload.results)),
          // Error Handling - the following message will be printed out if the request fail
          // It could be handled in a better way incase of unlimited time
          catchError((error: any) => {
            console.log('Something went wrong, Try again later...!');
            return null;
          })
        ))
    );
}
