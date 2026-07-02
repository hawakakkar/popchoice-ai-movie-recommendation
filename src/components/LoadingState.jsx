function LoadingState() {
  return (
    <main className="wizard">
      <div className="phone-card loading-box">
        <div>
          <img src="/logo.png" className="logo" alt="logo" />

          <h1>PopChoice</h1>

          <div className="loading-circle"></div>

          <h2>Finding Your Perfect Movie...</h2>

          <p className="subtitle">
            Our AI is searching thousands of movie meanings to find your best
            match.
          </p>
        </div>
      </div>
    </main>
  );
}

export default LoadingState;
