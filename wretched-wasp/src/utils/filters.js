import { selectedFilters } from '../stores/stores.js';

export function addFilter(category, value) {
  selectedFilters.update(currentFilters => {
    const index = currentFilters.findIndex(filter => filter.category === category && filter.value === value);
    if (index === -1) {
      return [...currentFilters, { category, value }];
    } else if (index !== -1) {
      return currentFilters.filter((_, i) => i !== index);
    }
    return currentFilters;
  });
}

export const removeFilter = (filter) => {
  selectedFilters.update(currentFilters => currentFilters.filter(f => f !== filter));
}

export function filterMovies(movies, filters) {
  if (filters.length === 0) return movies;

  return movies.filter(movie => 
    filters.every(filter => {
      switch (filter.category) {
        case 'Título':
          return movie.title.toLowerCase().includes(filter.value.toLowerCase());
        case 'Género':
          return movie.genres.includes(filter.value);
        case 'Plataforma de streaming':
          return movie.streamingProviders.includes(filter.value);
        case 'Estrellas':
          return movie.rating >= filter.value;
        default:
          return true;
      }
    })
  );
}

export const filterColor = (category) => {
  switch (category) {
    case 'Género':
      return 'lightblue';
    case 'Plataforma de streaming':
      return '#F17F66';
    case 'Estrellas':
      return '#EDC32E';
    default:
      return 'gray';
  }
}