import { KeyWordSearchAction, KEY_WORD_SEARCH } from './api.actions';

export function movieReducer(state: string = null, action): string {
  switch (action.type) {
    case KEY_WORD_SEARCH:
      return action.payload;
    default:
      return state;
  }
}
