import {KEY_WORD_SEARCH_SUCCESS} from './search.actions';
import { ISearchResults } from '../../search/searchResults.interface';

export function searchResultsReducer(state: ISearchResults[] = null, action): ISearchResults[] {
    switch (action.type) {
      case KEY_WORD_SEARCH_SUCCESS:
        return action.payload;

      default:
          return state;
    }
}
