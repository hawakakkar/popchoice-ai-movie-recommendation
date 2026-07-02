import { useState } from "react";
import "./App.css";

import QuestionsView from "./components/QuestionsView";
import ResultView from "./components/ResultView";
import LoadingState from "./components/LoadingState";

import { createEmbedding } from "./utils/createEmbedding";
import { searchMovies } from "./utils/searchMovies";
import { generateExplanation } from "./utils/generateExplanation";

function App() {
  // inputs
  const [favoriteMovie, setFavoriteMovie] = useState("");
  const [mood, setMood] = useState("");
  const [tone, setTone] = useState("");

  // ui state
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // result
  const [movie, setMovie] = useState(null);
  const [explanation, setExplanation] = useState("");

  // =========================
  // SUBMIT
  // =========================
  async function handleSubmit(e) {
    e.preventDefault();

    if (submitting) return;

    // FIXED VALIDATION
    const isInvalid = !favoriteMovie.trim() || !mood.trim() || !tone.trim();

    if (isInvalid) {
      alert("Please fill all fields");
      return;
    }

    setSubmitting(true);
    setLoading(true);

    try {
      // FIXED TEMPLATE STRING
      const profile = `
My favorite movie is ${favoriteMovie}.
I am looking for something ${mood}.
I want something ${tone}.
      `;

      const embedding = await createEmbedding(profile);

      const recommendedMovie = await searchMovies(embedding);

      const aiExplanation = await generateExplanation(
        profile,
        recommendedMovie,
      );

      setMovie(recommendedMovie);
      setExplanation(aiExplanation);
    } catch (error) {
      console.error("Error:", error);

      if (error?.message?.includes("429")) {
        alert("AI is busy right now. Please wait and try again.");
      } else {
        alert(error?.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  }

  // =========================
  // RESET
  // =========================
  function resetApp() {
    setFavoriteMovie("");
    setMood("");
    setTone("");
    setMovie(null);
    setExplanation("");
  }

  // =========================
  // LOADING
  // =========================
  if (loading) {
    return <LoadingState />;
  }

  // =========================
  // RESULT
  // =========================
  if (movie) {
    return (
      <ResultView movie={movie} explanation={explanation} onReset={resetApp} />
    );
  }

  // =========================
  // FORM PAGE
  // =========================
  return (
    <QuestionsView
      favoriteMovie={favoriteMovie}
      setFavoriteMovie={setFavoriteMovie}
      mood={mood}
      setMood={setMood}
      tone={tone}
      setTone={setTone}
      handleSubmit={handleSubmit}
    />
  );
}

export default App;
