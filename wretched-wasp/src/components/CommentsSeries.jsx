import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const Comments = ({ serieId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from('comentarios')
        .select('*')
        .eq('serie_id', serieId);

      if (error) {
        console.error('Error fetching comments:', error.message);
      } else {
        setComments(data);
      }
    };

    fetchComments();
  }, [serieId]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Comentarios</h2>
      {comments.length === 0 ? (
        <p>No hay comentarios aún.</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.id} className="comment relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
            <div className="relative flex gap-4">
              <img
                src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
                className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
                alt="User avatar"
                loading="lazy"
              />
              <div className="flex flex-col w-full">
                <div className="flex flex-row justify-between">
                  <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">{comment.user_mail}</p>
                  <a className="text-gray-500 text-xl" href="#"><i className="fa-solid fa-trash"></i></a>
                </div>
                <p className="text-gray-400 text-sm">Calificación: {comment.rating}/5</p>
              </div>
            </div>
            <p className="-mt-4 text-gray-500">{comment.coment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Comments;
