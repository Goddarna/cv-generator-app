export default function Input({ label, value, handleChange }) {
  return (
    <div>
      <label className="block">{label}</label>
      <input
        className="input"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
