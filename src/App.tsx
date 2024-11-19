import "./App.scss";

function App() {
  return (
    <>
      <header>
        <text>Reliable, efficient delivery </text>
        <h1>Powered by Technology</h1>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <main className="articles">
        <article className="card">
          <text className="card-title">Supervisor</text>
          <p className="card-description">
            Monitors activity to identify project roadblocks
          </p>
          <img className="cardImage" src="/images/icon-supervisor.svg" />
        </article>
        <article className="card">
          <text className="card-title">Team Builder</text>
          <p className="card-description">
            Scans our talent network to create the optimal team for your project
          </p>
          <img className="cardImage" src="/images/icon-team-builder.svg" />
        </article>
        <article className="card">
          <text className="card-title">Karma</text>
          <p className="card-description">
            Regularly evaluates our talent to ensure quality
          </p>
          <img className="cardImage" src="/images/icon-karma.svg" />
        </article>
        <article className="card">
          <text className="card-title">Calculator</text>
          <p className="card-description">
            Uses data from past projects to provide better delivery estimates
          </p>
          <img className="cardImage" src="/images/icon-calculator.svg" />
        </article>
      </main>
    </>
  );
}

export default App;
