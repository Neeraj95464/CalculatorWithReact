const Display = ({ displayValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Data"
        value={displayValue}
        readOnly
      />
    </>
  );
};
export default Display;
