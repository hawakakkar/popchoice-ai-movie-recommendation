function ResultView({ movie, onReset }) {
  if (!movie) return null;

  const poster = movie?.poster || movie?.image || movie?.cover;

  return (
    <main className="result-page">
      <div className="result-card">
        {/* Logo + Title */}
        <div className="header">
          <img src="/logo.png" alt="PopChoice" className="logo" />
          <h1 className="brand">PopChoice</h1>
        </div>

        {/* Movie Title */}
        <h2 className="movie-title">
          {movie.title} {movie.releaseYear ? `(${movie.releaseYear})` : ""}
        </h2>

        {/* Poster */}
        {poster && (
          <img src={poster} alt={movie.title} className="movie-poster" />
        )}

        {/* Description */}
        <p className="movie-description">{movie.content}</p>

        {/* Button */}
        <button className="next-btn" onClick={onReset}>
          Go Again
        </button>
      </div>
    </main>
  );
}

export default ResultView;
