import React, { useState } from 'react';

const NewComment = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Comentario enviado:', comment);
    setComment('');
  };

  return (
    <div className="border border-gray-300 p-4 rounded-lg w-full mx-100">
      <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Calificación
            </label>
            <input
              className="appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
              id="rating" type="number" min="1" max="5" placeholder="1 a 5" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="comment">
                Contenido del mensaje
            </label>
            <textarea rows="4"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                id="comment" placeholder="Escribe tu comentario...">
            </textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button">Publicar
            </button>
          </div>
      </form>
    </div>
  );
};

export default NewComment;