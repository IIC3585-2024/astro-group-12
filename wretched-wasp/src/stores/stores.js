import  { writable } from 'svelte/store';
import { filterMovies, filterSeries } from '../utils/filters.js';
import { createClient } from '@supabase/supabase-js';

import allMovies from '../api/dummyMovies.json';
import allGenres from '../api/dummyGenres.json';
import allStreamingProviders from '../api/dummyStreamingProviders.json';
import allStars from '../api/dummyStars.json';


const SUPABASE_URL = "https://qybfxlbdjylxlcjntlwa.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5YmZ4bGJkanlseGxjam50bHdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyNzI1MTIsImV4cCI6MjAzNDg0ODUxMn0.rMPNwWx4GRS3wiv3ygaptNpkkgdZi1CJxbGlGYTk8IE"
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


const fetchSeries = async () => {
  try {
    const { data, error } = await supabase.from('series').select('*');
    if (error) {
      throw error;
    }
    console.log('Series obtenidas:', data);
    return data;
  } catch (error) {
    console.error('Error al obtener series:', error.message);
  }
};

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