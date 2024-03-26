export default function PersonalDetailsView({
  name,
  email,
  phone,
  togglePersonalDetails,
  onTogglePersonalDetails,
}) {
  return (
    <section className="cv-section text-center">
      <h1 className="text-3xl">{name}</h1>
      <p>{email}</p>
      <p>{phone}</p>
      <button
        className={`btn ${togglePersonalDetails ? "hidden" : "block"}`}
        onClick={onTogglePersonalDetails}
      >
        Edit Personal Details
      </button>
    </section>
  );
}
