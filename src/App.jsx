import { useState } from "react";
import "./styles/App.css";

// import Input from './components/Input';
// import Cv from './components/CV';
import PersonalDetailsInput from "./components/PersonalDetailsInput";
import ExperienceInputList from "./components/ExperienceInputList";
import PersonalDetailsView from "./components/PersonalDetailsView";
import ExperienceView from "./components/ExperienceView";
// import EducationInputList from "./components/EducationInputList";

function App() {
  // Set CV data
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [personalDetails, setPersonalDetails] = useState({});
  // Toggle edits
  const [togglePersonalDetails, setTogglePersonalDetails] = useState(true);
  const [toggleExperience, setToggleExperience] = useState(true);
  const [toggleEducation, setToggleEducation] = useState(true);

  function handlePersonalSubmit(name, email, phone) {
    let details = { name, email, phone };
    setPersonalDetails(details);
  }

  function handleExperienceSubmit(experience) {
    setExperience(experience);
  }

  function handleEducationSubmit(education) {
    setEducation(education);
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline text-white">CV Generator</h1>
      <div className="cv-container">
        {/* Add personal input section */}
        {/* <SingleSectionInput
          toggle={togglePersonalDetails}
          onPersonalSubmit={handlePersonalSubmit}
          onTogglePersonalDetails={() => setTogglePersonalDetails(false)}
        /> */}

        <PersonalDetailsInput
          toggle={togglePersonalDetails}
          onPersonalSubmit={handlePersonalSubmit}
          onTogglePersonalDetails={() => setTogglePersonalDetails(false)}
        />
        <PersonalDetailsView
          name={personalDetails.name}
          email={personalDetails.email}
          phone={personalDetails.phone}
          togglePersonalDetails={togglePersonalDetails}
          onTogglePersonalDetails={() => setTogglePersonalDetails(true)}
        />
        <ExperienceInputList
          toggle={toggleExperience}
          onExperienceSubmit={handleExperienceSubmit}
          onToggleExperience={() => setToggleExperience(false)}
        />
        <ExperienceView
          experience={experience}
          toggleExperience={toggleExperience}
          onToggleExperience={() => setToggleExperience(true)}
        />
        {/* <EducationInputList
          toggle={toggleEducation}
          onEducationSubmit={handleEducationSubmit}
          onToggleEducation={() => setToggleEducation(false)}
        /> */}
      </div>
    </>
  );
}

export default App;
