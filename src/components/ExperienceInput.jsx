import Input from "./Input";
// import { useState } from "react";

export default function ExperienceInput({
  experience,
  onExperienceChange,
  onRemoveExperience,
}) {
  function handleChange(type, value) {
    onExperienceChange(experience.id, type, value);
  }

  return (
    <section className="bg-sky-100 m-2 experience-box">
      <Input
        label="Position:"
        value={experience.position}
        handleChange={(e) => handleChange("position", e.target.value)}
      />
      <Input
        label="company:"
        value={experience.company}
        handleChange={(e) => {
          handleChange("company", e.target.value);
        }}
      />
      <Input
        label="Dates:"
        value={experience.dates}
        handleChange={(e) => {
          handleChange("dates", e.target.value);
        }}
      />
      <Input
        label="Info:"
        value={experience.info}
        handleChange={(e) => {
          handleChange("info", e.target.value);
        }}
      />
      <button
        className="btn remove"
        onClick={() => {
          onRemoveExperience(experience.id);
        }}
      >
        Remove Experience
      </button>
    </section>
  );
}
