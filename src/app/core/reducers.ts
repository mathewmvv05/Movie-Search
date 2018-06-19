import { ActionReducerMap } from '@ngrx/store';

import { IStore } from './store';
import {movieReducer} from './movieReducer';


export const reducers: ActionReducerMap<IStore> = {
  movies: movieReducer
};
