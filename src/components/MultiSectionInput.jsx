import SectionInput from "./SectionInput";
import { useState } from "react";

export default function MultiSectionInput({
  title,
  defaultData,
  dataProperties,
  toggle,
  onSubmit,
  onToggle,
}) {
  const [data, setData] = useState([defaultData]);
  const [dataCounter, setDataCounter] = useState(1);

  function onChange(id, type, value) {
    // get object to be updated and get an array with the rest of the obejcts not updated
    const not = data.filter((exp) => exp.id !== id);
    const found = data.filter((exp) => exp.id === id)[0];
    found[type] = value;

    const newArray = [...not, found];

    // keep the order of data based on ids
    newArray.sort((a, b) => a.id - b.id);

    setData(newArray);
  }

  function onRemove(id) {
    // remove experience by id by filtering it out
    const removed = data.filter((exp) => exp.id !== id);

    setData(removed);
  }

  function addNew() {
    const newData = {};
    // Create new id with default data
    dataProperties.forEach((prop) => {
      newData[prop] = "";
    });

    newData.id = dataCounter + 1;
    console.log(newData);

    setDataCounter((prevDataCounter) => prevDataCounter + 1);

    // Append new experience and increment counter for a new id next time
    setData((prevData) => [...prevData, newData]);
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
        {data.map((d) => (
          <SectionInput
            key={d.id}
            data={d}
            onChange={onChange}
            onRemove={onRemove}
          />
        ))}
        <div className="btn-group">
          <button className="btn" onClick={addNew}>
            + Add New
          </button>
          <button
            className="btn"
            onClick={() => {
              onSubmit(data);
            }}
          >
            Update
          </button>
        </div>

        <button className="btn close" onClick={onClose}>
          X
        </button>
      </section>
    </>
  );
}
