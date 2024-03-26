import { useState } from "react";
import ExperienceInput from "./ExperienceInput";

export default function ExperienceInputList({
  toggle,
  onExperienceSubmit,
  onToggleExperience,
}) {
  // default data (can be removed)
  const experienceDefault = {
    id: 1,
    position: "Web Developer",
    company: "Make Co",
    dates: "2019-2017",
    info: "I worked here, i liked it.",
  };
  const [experience, setExperience] = useState([experienceDefault]);
  const [experienceCounter, setExperienceCounter] = useState(1);

  function onExperienceChange(id, type, value) {
    // get object to be updated and get an array with the rest of the obejcts not updated
    const notExperience = experience.filter((exp) => exp.id !== id);
    const foundExperience = experience.filter((exp) => exp.id === id)[0];
    foundExperience[type] = value;

    const newExperienceArray = [...notExperience, foundExperience];

    // keep the order of data based on ids
    newExperienceArray.sort((a, b) => a.id - b.id);

    setExperience(newExperienceArray);
  }

  function onRemoveExperience(id) {
    // remove experience by id by filtering it out
    const removedExperience = experience.filter((exp) => exp.id !== id);

    setExperience(removedExperience);
  }

  function addNewExperience() {
    // Create new id with default data
    const newExperience = {
      id: experienceCounter + 1,
      position: experienceDefault.position,
      company: experienceDefault.company,
      info: experienceDefault.info,
      dates: experienceDefault.dates,
    };

    setExperienceCounter((prevExperienceCounter) => prevExperienceCounter + 1);

    // Append new experience and increment counter for a new id next time
    setExperience((prevExperience) => [...prevExperience, newExperience]);
  }

  function onClose() {
    // Update on close
    onExperienceSubmit(experience);
    onToggleExperience();
  }

  return (
    <>
      <section className={`edit-box ${toggle ? "block" : "hidden"}`}>
        <h2 className="text-center">Experience</h2>
        {experience.map((exp) => (
          <ExperienceInput
            key={exp.id}
            experience={exp}
            onExperienceChange={onExperienceChange}
            onRemoveExperience={onRemoveExperience}
          />
        ))}
        <div className="btn-group">
          <button className="btn" onClick={addNewExperience}>
            + Add New Experience
          </button>
          <button
            className="btn"
            onClick={() => {
              onExperienceSubmit(experience);
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
