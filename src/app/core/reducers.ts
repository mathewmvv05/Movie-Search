import { ActionReducerMap } from '@ngrx/store';

import { IStore } from './store';
import {searchResultsReducer} from './searchResults.reducer';


export const reducers: ActionReducerMap<IStore> = {
  searchResults: searchResultsReducer
};
