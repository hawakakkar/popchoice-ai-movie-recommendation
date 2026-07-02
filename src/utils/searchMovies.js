import { supabase } from "../lib/config";

export async function searchMovies(embedding) {
  const { data, error } = await supabase.rpc("match_movies", {
    query_embedding: embedding,
    match_threshold: 0,
    match_count: 1,
  });

  if (error) throw error;

  console.log(data[0]); // <-- add this line

  const movie = data[0];

  return {
    id: movie.id,
    title: movie.title,
    releaseYear: movie.release_year || movie.releaseYear,
    content: movie.content,
    similarity: movie.similarity,
  };
}
