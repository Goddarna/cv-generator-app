import Input from "./Input";

export default function SectionInput({
  data,
  onChange,
  onRemove,
  enableRemove = true,
}) {
  function handleChange(type, value) {
    onChange(data.id, type, value);
  }

  // Create an input instance based on the data properties, expect for id
  const inputs = Object.keys(data).map((property, i) => {
    if (property !== "id") {
      return (
        <Input
          key={i}
          label={property}
          value={data[property]}
          handleChange={(e) => handleChange(property, e.target.value)}
        />
      );
    }
  });

  return (
    <section className="bg-sky-100 m-2 experience-box">
      <div>{inputs}</div>

      {enableRemove && (
        <button
          className="btn remove"
          onClick={() => {
            onRemove(data.id);
          }}
        >
          Remove
        </button>
      )}
    </section>
  );
}
