const STEPS = [
  {
    title: 'Work in focused sprints',
    text: 'Pick a task and work on it for 25 uninterrupted minutes.',
  },
  {
    title: 'Take a short break',
    text: 'When the timer ends, step away for 5 minutes to reset.',
  },
  {
    title: 'Repeat and track progress',
    text: 'Each cycle is one session — repeat it to build momentum.',
  },
]

function TechniqueInfo() {
  return (
    <section className="technique" aria-labelledby="technique-heading">
      <h2 id="technique-heading" className="technique__heading">
        How the Pomodoro Technique works
      </h2>
      <p className="technique__intro">
        A simple time-management method that breaks work into focused
        intervals, separated by short breaks, to help you stay concentrated
        and avoid burnout.
      </p>

      <ol className="technique__steps">
        {STEPS.map((step, index) => (
          <li key={step.title} className="technique__step">
            <span className="technique__step-number" aria-hidden="true">
              {index + 1}
            </span>
            <div>
              <h3 className="technique__step-title">{step.title}</h3>
              <p className="technique__step-text">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default TechniqueInfo
