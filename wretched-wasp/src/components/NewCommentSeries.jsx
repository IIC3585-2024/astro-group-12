import { useState } from 'react';
import { supabase } from '../lib/supabase';

const NewCommentSeries = ({ serieId, email }) => {
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmitComment = async (event) => {
    event.preventDefault();
    try {
      console.log('Agregando comentario...');

      if (!commentText || rating <= 0 || rating > 5) {
        console.error('Invalid input');
        return;
      }

      const { data, error } = await supabase.from('comentarios').insert([
        {
          coment: commentText,
          serie_id: serieId,
          user_mail: email,
          rating: rating
        }
      ]);

      if (error) {
        throw error;
      }

      console.log('Comentario agregado:', data);
      setCommentText('');
      setRating(0);
    } catch (error) {
      console.error('Error al agregar comentario:', error.message);
      // nos pegamos un sleep
      await new Promise((resolve) => setTimeout(resolve, 10000));
      // volvemos a intentar
    }
  };

  return (
    <form onSubmit={handleSubmitComment} className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Deja tu Comentario</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Comentario:
        </label>
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Escribe tu comentario aquí"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Calificación:
        </label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="1-5"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Agregar Comentario
        </button>
      </div>
    </form>
  );
};

export default NewCommentSeries;
