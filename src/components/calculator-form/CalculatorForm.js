import React, { useState } from "react";
import style from "./CalculatorForm.module.css";

const INITIAL_FORM_DATA = {
  currentSavings: "",
  yearlyContribution: "",
  expectedReturn: "",
  duration: "",
};

function CalculatorForm({ onFormDataChange }) {
  const [userInput, setUserInput] = useState(INITIAL_FORM_DATA);

  const onCurrentSavingsChange = (e) => {
    const currentSavings = e.target.value;

    setUserInput((previousState) => {
      return {
        ...previousState,
        currentSavings,
      };
    });
  };

  const onYearlyContributionChange = (e) => {
    const yearlyContribution = e.target.value;

    setUserInput((previousState) => {
      return {
        ...previousState,
        yearlyContribution,
      };
    });
  };

  const onExpectedReturnChange = (e) => {
    const expectedReturn = e.target.value;

    setUserInput((previousState) => {
      return {
        ...previousState,
        expectedReturn,
      };
    });
  };

  const onDurationChange = (e) => {
    const duration = e.target.value;

    setUserInput((previousState) => {
      return {
        ...previousState,
        duration,
      };
    });
  };

  const onResetForm = () => {
    setUserInput(INITIAL_FORM_DATA);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    onFormDataChange(userInput);

    onResetForm();
  };

  return (
    <form className={style["form"]} onSubmit={onSubmitForm}>
      <div className={style["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput.currentSavings}
            onChange={onCurrentSavingsChange}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput.yearlyContribution}
            onChange={onYearlyContributionChange}
          />
        </p>
      </div>
      <div className={style["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput.expectedReturn}
            onChange={onExpectedReturnChange}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={onDurationChange}
          />
        </p>
      </div>
      <p className={style["actions"]}>
        <button
          type="reset"
          className={style["buttonAlt"]}
          onClick={onResetForm}
        >
          Reset
        </button>
        <button type="submit" className={style["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default CalculatorForm;
