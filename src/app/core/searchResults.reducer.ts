import {KEY_WORD_SEARCH_SUCCESS, KeyWordSearchSuccessAction} from './api.actions';

import { ISearchResults } from '../search/searchResults.interface';

export function searchResultsReducer(state: ISearchResults[] = null, action): ISearchResults[] {
    switch (action.type) {
      case KEY_WORD_SEARCH_SUCCESS:
        return action.payload.map(result => ({
          title: result.title,
          releaseDate: result.release_date,
          language: result.language,
          overView: result.overview,
          imgPath: result.imgPath,
          posterPath: result.poster_path
        }));

      default:
          return state;
    }
}
