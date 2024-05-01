const ButtonContainer = ({ onButtonClick }) => {
  const buttonsName = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div id="buttons">
        {buttonsName.map((buttonName) => (
          <button className="button" onClick={() => onButtonClick(buttonName)}>
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonContainer;
