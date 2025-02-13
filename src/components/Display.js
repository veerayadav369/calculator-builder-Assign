import React from "react";
import { useCalculatorStore } from "../store/useCalculatorStore";

const Display = () => {
  const { displayValue } = useCalculatorStore();

  return <div className="display">{displayValue}</div>;
};

export default Display;

