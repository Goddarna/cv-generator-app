export default function Input({ label, value, handleChange }) {
  return (
    <div>
      <label className="block capitalize">{label}</label>
      <input
        className="input px-2"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
