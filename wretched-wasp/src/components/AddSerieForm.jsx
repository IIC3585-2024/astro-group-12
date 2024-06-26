import { useState } from 'react';
import { supabase } from '../lib/supabase';

const AddSerieForm = () => {
  const [name, setName] = useState('');
  const [streamingService, setStreamingService] = useState('');
  const [seasons, setSeasons] = useState('');
  const [episodesPerSeason, setEpisodesPerSeason] = useState('');
  const [category, setCategory] = useState('');
  const [stars, setStars] = useState('');
  const [image, setImage] = useState('');
  const [overview, setOverview] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase.from('series').insert([
        {
          name: name,
          streaming_service: streamingService,
          seasons: parseInt(seasons),
          episodes_per_season: parseInt(episodesPerSeason),
          category: category,
          stars: parseInt(stars),
          image: image,
          overview: overview
        }
      ]);

      if (error) {
        throw error;
      }
      setName('');
      setStreamingService('');
      setSeasons('');
      setEpisodesPerSeason('');
      setCategory('');
      setStars('');
    } catch (error) {
      console.error('Error al agregar serie:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg p-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nombre:
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Servicio de Streaming:
        </label>
        <input
          type="text"
          value={streamingService}
          onChange={(e) => setStreamingService(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Temporadas:
        </label>
        <input
          type="number"
          value={seasons}
          onChange={(e) => setSeasons(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Episodios por Temporada:
        </label>
        <input
          type="number"
          value={episodesPerSeason}
          onChange={(e) => setEpisodesPerSeason(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Categoría:
        </label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Estrellas:
        </label>
        <input
          type="number"
          value={stars}
          onChange={(e) => setStars(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Imagen:
        </label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Resumen:
        </label>
        <textarea
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Agregar Serie
        </button>
      </div>
    </form>
  );
};

export default AddSerieForm;
