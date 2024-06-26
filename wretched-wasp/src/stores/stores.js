import  { writable } from 'svelte/store';
import { filterMovies, filterSeries } from '../utils/filters.js';
import { fetchAllComments, fetchSeries, fetchComments} from '../stores/supabase.js';

import allMovies from '../api/dummyMovies.json';
import allGenres from '../api/dummyGenres.json';
import allStreamingProviders from '../api/dummyStreamingProviders.json';
import allStars from '../api/dummyStars.json';




export const comments = writable([]);
const series = await fetchSeries();


export const seriesList = writable(series);
export const moviesList = writable(allMovies);
export const selectedFilters = writable([]);
export const genresList = writable(allGenres);
export const streamingProvidersList = writable(allStreamingProviders);
export const starsList = writable(allStars);

selectedFilters.subscribe(filters => {
  const filteredMovies = filterMovies(allMovies, filters);
  moviesList.set(filteredMovies);
});

selectedFilters.subscribe(filters => {
  const filteredSeries = filterSeries(series, filters);
  seriesList.set(filteredSeries);
});