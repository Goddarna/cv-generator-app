import { useState } from "react";
import SectionInput from "./SectionInput";

export default function PersonalDetailsInput({
  title,
  defaultData,
  onSubmit,
  toggle,
  onToggle,
}) {
  const [data, setData] = useState(defaultData);

  function onChange(id, type, value) {
    // Dont mutate the state, create another object to use
    const newData = { ...data };
    newData[type] = value;

    setData(newData);
  }

  function onClose() {
    // Update on close
    onSubmit(data);
    onToggle();
  }

  return (
    <>
      <section className={`edit-box ${toggle ? "block" : "hidden"}`}>
        <h2 className="text-center">{title}</h2>
        <div className="flex inputs">
          <SectionInput data={data} onChange={onChange} enableRemove={false} />
        </div>
        <button
          className="btn"
          onClick={() => {
            onSubmit(data);
          }}
        >
          Update
        </button>
        <button className="btn close" onClick={onClose}>
          X
        </button>
      </section>
    </>
  );
}
