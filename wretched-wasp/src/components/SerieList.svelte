<script>
    //@ts no-check
    import { seriesList } from '../stores/stores.js';
    import SerieCard from './SerieCard.svelte';
  </script>
  
  <div>
    <ul>
      {#each $seriesList as serie}
        <a href='/series/{serie.id}'>
          <SerieCard
            name={serie.name}
            category={serie.category}
            overview={serie.overview}
            stars={serie.stars}
            streaming_service={serie.streaming_service}
            seasons={serie.seasons}
            episodes_per_season={serie.episodes_per_season}
            image={serie.image}
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