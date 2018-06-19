import { Action } from '@ngrx/store';

import { ISearchResults } from '../../search/searchResults.interface';

export const KEY_WORD_SEARCH = '[Search] keyword';
export const KEY_WORD_SEARCH_SUCCESS = '[Search] keyword success';

// Action declared to take string(user input keyword) as argument
export class KeyWordSearchAction implements Action {
  public readonly type = KEY_WORD_SEARCH;
  constructor (readonly payload: string) {}
}

// Action declared with the type of ISearchResults to dispatch on success of api request
export class KeyWordSearchSuccessAction implements Action {
  public readonly type = KEY_WORD_SEARCH_SUCCESS;
  constructor (readonly payload: ISearchResults[]) {}
}
