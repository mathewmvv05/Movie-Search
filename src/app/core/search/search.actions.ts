
import {Action} from '@ngrx/store';

import {ISearchResults} from '../../search/searchResults.interface';

export const KEY_WORD_SEARCH = '[Search] keyword';
export const KEY_WORD_SEARCH_SUCCESS = '[Search] keyword success';

export class KeyWordSearchAction implements Action {
  public readonly type = KEY_WORD_SEARCH;
  constructor (readonly payload: string) {}
}

export class KeyWordSearchSuccessAction implements Action {
  public readonly type = KEY_WORD_SEARCH_SUCCESS;
  constructor (readonly payload: ISearchResults[]) {}
}
