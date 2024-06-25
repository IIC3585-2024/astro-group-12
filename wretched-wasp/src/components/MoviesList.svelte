<script>
  //@ts no-check
  import { moviesList } from '../stores/stores.js';
  import MovieCard from './MovieCard.svelte';
</script>

<div>
  <ul>
    {#each $moviesList as movie}
      <a href='/titles/{movie.title}' >
        <MovieCard
          title={movie.title}
          genres={movie.genres}
          imbd_id={movie.imbd_id}
          overview={movie.overview}
          release_date={movie.release_date}
          streamingProviders={movie.streamingProviders}
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