import { useState } from "react";
import "./styles/App.css";

import MultiSectionInput from "./components/MultiSectionInput";
import SectionView from "./components/SectionView";
import SingleSectionInput from "./components/SingleSectionInput";

// default data
const detailsDefault = {
  id: 1,
  name: "Bob Smith",
  email: "bobsmith@email.com",
  phone: "+7934543534",
};
const experienceDefault = {
  id: 1,
  position: "Web Developer",
  company: "Make Co",
  dates: "2016-2017",
  info: "I worked here, i liked it.",
};
const educationDefault = {
  id: 1,
  school: "University",
  qualification: "BSc Web Development",
  dates: "2013-2017",
  info: "I learned here, i liked it.",
};

function App() {
  // Set CV data
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [personalDetails, setPersonalDetails] = useState({});
  // Toggle edits
  const [togglePersonalDetails, setTogglePersonalDetails] = useState(true);
  const [toggleExperience, setToggleExperience] = useState(true);
  const [toggleEducation, setToggleEducation] = useState(true);

  function handlePersonalSubmit(personalDetails) {
    setPersonalDetails(personalDetails);
    setTogglePersonalDetails(false);
  }

  function handleExperienceSubmit(experience) {
    setExperience(experience);
    setToggleExperience(false);
  }

  function handleEducationSubmit(education) {
    setEducation(education);
    setToggleEducation(false);
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline text-white">CV Generator</h1>
      <div className="cv-container">
        <SingleSectionInput
          title="Personal Details"
          defaultData={detailsDefault}
          onSubmit={handlePersonalSubmit}
          toggle={togglePersonalDetails}
          onToggle={() => setTogglePersonalDetails(false)}
        />
        <SectionView
          type="Personal Details"
          data={personalDetails}
          toggle={togglePersonalDetails}
          onToggle={() => setTogglePersonalDetails(true)}
        />
        <MultiSectionInput
          title="experience"
          defaultData={experienceDefault}
          dataProperties={["position", "company", "dates", "info"]}
          toggle={toggleExperience}
          onSubmit={handleExperienceSubmit}
          onToggle={() => setToggleExperience(false)}
        />
        <SectionView
          type="Experience"
          data={experience}
          toggle={toggleExperience}
          onToggle={() => setToggleExperience(true)}
        />
        <MultiSectionInput
          title="Education"
          defaultData={educationDefault}
          dataProperties={["school", "qualification", "dates", "info"]}
          toggle={toggleEducation}
          onSubmit={handleEducationSubmit}
          onToggle={() => setToggleEducation(false)}
        />
        <SectionView
          type="Education"
          data={education}
          toggle={toggleEducation}
          onToggle={() => setToggleEducation(true)}
        />
      </div>
    </>
  );
}

export default App;
