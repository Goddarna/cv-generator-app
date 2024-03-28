export default function MultiSectionView({ type, data, toggle, onToggle }) {
  let view = [];

  if (type === "Experience") {
    view = data.map((d) => (
      <div key={d.id} className="relative m-2">
        <h2 className="text-lg">{d.position}</h2>
        <p>
          <em>{d.company}</em>
        </p>
        <p className="absolute top-0 right-0">{d.dates}</p>
        <p>{d.info}</p>
      </div>
    ));
  } else if (type === "Education") {
    view = data.map((d) => (
      <div key={d.id} className="relative m-2">
        <h2 className="text-lg">{d.qualification}</h2>
        <p>
          <em>{d.school}</em>
        </p>
        <p className="absolute top-0 right-0">{d.dates}</p>
        <p>{d.info}</p>
      </div>
    ));
  } else if (type === "Personal Details") {
    view = (
      <div key={data.id} className="text-center">
        <h1 className="text-3xl">{data.name}</h1>
        <p>{data.email}</p>
        <p>{data.phone}</p>
      </div>
    );
  }

  return (
    <section className={`cv-section ${type}`}>
      {type !== "Personal Details" && (
        <h2 className="cv-section-heading">{type}</h2>
      )}
      {view}
      <button
        className={`btn ${toggle ? "hidden" : "block"}`}
        onClick={onToggle}
      >
        Edit {type}
      </button>
    </section>
  );
}
