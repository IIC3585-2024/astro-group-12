import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://qybfxlbdjylxlcjntlwa.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5YmZ4bGJkanlseGxjam50bHdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkyNzI1MTIsImV4cCI6MjAzNDg0ODUxMn0.rMPNwWx4GRS3wiv3ygaptNpkkgdZi1CJxbGlGYTk8IE"
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


export const fetchSeries = async () => {
  try {
    const { data, error } = await supabase.from('series').select('*');
    if (error) {
      throw error;
    }
    console.log('Series obtenidas:', data);
    return data;
  } catch (error) {
    console.error('Error al obtener series:', error.message);
  }
};

export const fetchComments = async (serieId) => {
  try {
    const { data, error } = await supabase.from('comentarios').select('*').eq('serie_id', serieId);
    if (error) throw error;
    comments.set(data);
  } catch (error) {
    console.error('Error fetching comments:', error.message);
  }
};

export const fetchAllComments = async () => {
  try {
    const { data, error } = await supabase.from('comentarios').select('*');
    if (error) throw error;
    comments.set(data);
  } catch (error) {
    console.error('Error fetching all comments:', error.message);
  }
}

export const addComment = async (serieId, user_mail, commentText, rating) => {
  try {
    const { data, error } = await supabase.from('comentarios').insert([{ serie_id: serieId, user_mail: user_mail, coment: commentText, rating: rating }]);
    if (error) throw error;
    fetchComments(serieId); // Refresh comments after adding
  } catch (error) {
    console.error('Error adding comment:', error.message);
  }
};
