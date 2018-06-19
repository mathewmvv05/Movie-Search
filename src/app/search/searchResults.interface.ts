// Interface to define the type of result we need from the api data result
export interface ISearchResults {
  title: string;
  original_language: string;
  release_date: string;
  overview: string;
  imgPath: string;
  poster_path: string;
  vote_average: number;
}
