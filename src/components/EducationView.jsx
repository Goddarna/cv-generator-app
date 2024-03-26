export default function ExperienceView(props) {
  return (
    <section className="cv-section">
      {props.experience.map((exp) => (
        <div key={exp.id} className="relative m-2">
          <h2 className="text-lg">{exp.position}</h2>
          <p>
            <em>{exp.company}</em>
          </p>
          <p className="absolute top-0 right-0">{exp.dates}</p>
          <p>{exp.info}</p>
        </div>
      ))}

      <button
        className={`btn ${props.toggleExperience ? "hidden" : "block"}`}
        onClick={props.onToggleExperience}
      >
        Edit Experience
      </button>
    </section>
  );
}
