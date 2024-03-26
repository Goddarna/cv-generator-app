import { useState } from "react";
import Input from "./Input";

export default function PersonalDetailsInput({
  onPersonalSubmit,
  toggle,
  onTogglePersonalDetails,
}) {
  const [name, setName] = useState("Bob Smith");
  const [email, setEmail] = useState("bobsmith@email.com");
  const [phoneNumber, setPhoneNumber] = useState("+447324899923");

  function handleNameChange({ target }) {
    setName(target.value);
  }

  function handleEmailChange({ target }) {
    setEmail(target.value);
  }

  function handlePhoneChange({ target }) {
    setPhoneNumber(target.value);
  }

  return (
    <>
      <section className={`edit-box ${toggle ? "block" : "hidden"}`}>
        <h2 className="text-center">Personal Details</h2>
        <div className="flex inputs">
          <Input
            label="Full Name:"
            value={name}
            handleChange={handleNameChange}
          />
          <Input
            label="Email:"
            value={email}
            handleChange={handleEmailChange}
          />
          <Input
            label="Phone Number:"
            value={phoneNumber}
            handleChange={handlePhoneChange}
          />
        </div>
        <button
          className="btn"
          onClick={() => {
            onPersonalSubmit(name, email, phoneNumber);
          }}
        >
          Update
        </button>
        <button className="btn close" onClick={onTogglePersonalDetails}>
          X
        </button>
      </section>
    </>
  );
}
