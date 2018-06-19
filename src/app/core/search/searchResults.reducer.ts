import { ISearchResults } from '../../search/searchResults.interface';
import { KEY_WORD_SEARCH_SUCCESS } from './search.actions';

// In searchResultsReducer the initial state is set to null
export function searchResultsReducer(state: ISearchResults[] = null, action): ISearchResults[] {
    switch (action.type) {
      // In case of KEY_WORD_SEARCH_SUCCESS type action, the payload is set to the searchResults in the store
      case KEY_WORD_SEARCH_SUCCESS:
        return action.payload;

      default:
          return state;
    }
}
