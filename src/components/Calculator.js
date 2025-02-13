import React from "react";
import { useCalculatorStore } from "../store/useCalculatorStore";
import Display from "./Display";
import Button from "./Button";
import DragDropContainer from "./DragDropContainer";
import "./Calculator.css";

const Calculator = () => {
  const { buttons, handleButtonClick } = useCalculatorStore();

  return (
    <div className="calculator">
      <Display />
      <DragDropContainer>
        {buttons.map((button) => (
          <Button
            key={button.label}
            label={button.label}
            onClick={() => handleButtonClick(button.label)}
          />
        ))}
      </DragDropContainer>
    </div>
  );
};

export default Calculator;

