import {Action} from '@ngrx/store';

export const KEY_WORD_SEARCH = '[Message] Display';

export class KeyWordSearchAction implements Action {
  public readonly type = KEY_WORD_SEARCH;
  constructor (readonly payload: string) {}
}
