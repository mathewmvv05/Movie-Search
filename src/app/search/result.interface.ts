import {ISearchResults} from './searchResults.interface';

export interface IResult {
  page: number;
  results: ISearchResults[];
  totalResults: number;
  totalPages: number;
}
