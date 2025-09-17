// components/PinInput.js
const PinInput = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="pin">Enter your PIN:</label>
      <input
        type="password"
        id="pin"
        value={value}
        onChange={onChange}
        maxLength={4} // Limit to 4 digits
      />
    </div>
  );
};

export default PinInput;
