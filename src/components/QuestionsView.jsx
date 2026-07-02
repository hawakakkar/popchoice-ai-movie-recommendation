function QuestionsView({
  favoriteMovie,
  setFavoriteMovie,
  mood,
  setMood,
  tone,
  setTone,
  handleSubmit,
}) {
  return (
    <main className="app-wrapper">
      <div className="card">
        <img className="logo" src="/logo.png" alt="PopChoice Logo" />

        <h1 className="title">PopChoice</h1>

        <form onSubmit={handleSubmit}>
          {/* Favorite Movie */}
          <div className="form-group">
            <label>What's your favorite movie and why?</label>

            <textarea
              value={favoriteMovie}
              onChange={(e) => setFavoriteMovie(e.target.value)}
              placeholder="The Spider-Man because it taught me to help people in every situations no matter how hard situations gets."
              rows={5}
            />
          </div>

          {/* Mood */}
          <div className="form-group">
            <label>Are you in the moode for something new or a classic?</label>

            <textarea
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="I want to watch movies that were released after 2022"
              rows={4}
            />
          </div>

          {/* Tone */}
          <div className="form-group">
            <label>
              Do you wanna have fun or do you want something serious?
            </label>

            <textarea
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              placeholder="I want to watch something stupid and fun"
              rows={5}
            />
          </div>

          <button className="submit-btn" type="submit">
            Let's Go
          </button>
        </form>
      </div>
    </main>
  );
}

export default QuestionsView;
