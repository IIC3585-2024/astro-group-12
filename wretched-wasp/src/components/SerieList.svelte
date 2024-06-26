<script>
    //@ts no-check
    import { seriesList } from '../stores/stores.js';
    import SerieCard from './SerieCard.svelte';
  </script>
  
  <div>
    <ul>
      {#each $seriesList as movie}
        <a href='/series/{movie.id}' >
          <SerieCard
            id={movie.id}
            name={movie.name}
            category={movie.category}
            overview={movie.overview}
            stars={movie.stars}
            release_date={movie.release_date}
            streaming_service={movie.streaming_service}
            seasons={movie.seasons}
            episodes_per_season={movie.episodes_per_season}
            image={movie.image}
          />
        </a>
      {/each}
    </ul>
  </div>
  
  <style>
    ul {
      list-style: none;
      padding: 0;
    }
    a {
      text-decoration: none;
    }
  </style>