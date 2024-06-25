
<script>
  export let title;
  export let genres;
  export let imdb_id;
  export let overview;
  export let release_date;
  export let rating;
  export let streamingProviders;
  export let image;
</script>

<div class="movie-card">
  <img class="movie-poster" src={image} alt={title}>
  <div class="movie-info">
      <h2 class="movie-title">{title}</h2>
      <p class="movie-genres">{genres?.join(', ')}</p>
      <p class="movie-overview">{overview}</p>
      <a href={`https://www.imdb.com/title/${imdb_id}`} target="_blank" class="movie-imdb-link">Ver en IMDb</a>
      <p class="movie-release-date">Lanzamiento: {release_date}</p>
      <p class="movie-rating">{rating}/5</p>
      <div class="movie-streaming-providers">
          Disponible en: {streamingProviders?.join(', ')}
      </div>
  </div>
</div>

<style>
  .movie-card {
    display: flex;
    background-color: #f4f4f4;
    margin: 10px 40px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .movie-poster {
    width: 150px;
    height: auto;
    border-radius: 8px;
  }

  .movie-info {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .movie-title {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
  }

  .movie-genres, .movie-overview, .movie-release-date, .movie-rating {
    margin: 5px 0;
    color: #666;
  }

  .movie-streaming-providers {
    margin: 5px 0;
    font-size: 0.9rem;
    color: #070707;
  }

  .movie-imdb-link {
    color: #007bff;
    text-decoration: none;
  }

  .movie-rating {
    color: #f39c12;
    font-weight: bold;
  }

  .movie-imdb-link:hover {
    text-decoration: underline;
  }

  .movie-card:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
  }
</style>