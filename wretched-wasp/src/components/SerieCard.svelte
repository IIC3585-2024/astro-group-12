
<script>
    export let name
    export let category
    export let overview
    export let stars
    export let streaming_service
    export let seasons
    export let episodes_per_season
    export let image
</script>

  
  <div class="serie-card">
    <img class="movie-poster" src={image} alt={name}>
    <div class="movie-info">
        <h2 class="movie-title">{name}</h2>
        <p class="movie-genres">{category}</p>
        <p class="movie-overview">{overview}</p>
        <p class="movie-rating">{stars}/10</p>
        <p class="movie-seasons">Temporadas: {seasons}</p>
        <p class="movie-episodes-per-season">Episodios por temporada: {episodes_per_season}</p>
        <div class="movie-streaming-providers">
            Disponible en: {streaming_service}
        </div>
    </div>
  </div>
  
  <style>
    .serie-card {
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
  
    .movie-genres, .movie-overview, .movie-episodes-per-season, .movie-rating {
      margin: 5px 0;
      color: #666;
    }
  
    .movie-streaming-providers {
      margin: 5px 0;
      font-size: 0.9rem;
      color: #070707;
    }
  
    .movie-rating {
      color: #f39c12;
      font-weight: bold;
    }
  
    .serie-card:hover {
      transform: scale(1.05);
      transition: transform 0.3s;
    }
  </style>