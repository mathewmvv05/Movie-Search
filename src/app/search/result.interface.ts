import { ISearchResults } from './searchResults.interface';

// Interface to define the type of the data from api endpoint
export interface IResult {
  page: number;
  results: ISearchResults[];
  totalResults: number;
  totalPages: number;
}
