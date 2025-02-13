import { create } from "zustand";
import { evaluate } from "mathjs";  // Import mathjs

export const useCalculatorStore = create((set) => ({
  displayValue: "0",
  buttons: [
    { label: "C" },
    { label: "/" },
    { label: "*" },
    { label: "-" },
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "+" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "=" },
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "0" },
  ],

  handleButtonClick: (label) =>
    set((state) => {
      if (label === "C") return { displayValue: "0" };

      if (label === "=") {
        try {
          return { displayValue: evaluate(state.displayValue).toString() }; // Safe evaluation
        } catch {
          return { displayValue: "Error" }; // Handle invalid input
        }
      }

      return {
        displayValue:
          state.displayValue === "0" ? label : state.displayValue + label,
      };
    }),
}));
