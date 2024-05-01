import "./App.css";
import Display from "./components/display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonName) => {
    if (buttonName === "c") {
      setCalValue("");
    } else if (buttonName === "=") {
      let result = eval(calValue);
      setCalValue(result);
    } else {
      let newDisplayValue = calValue + buttonName;
      setCalValue(newDisplayValue);
    }
  };

  return (
    <>
      <div id="calculator">
        <h1 id="Heading">Calculator</h1>
        <Display displayValue={calValue} />
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
