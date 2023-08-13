import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import CalculatorForm from "./components/calculator-form/CalculatorForm";
import DetailsTable from "./components/details-table/DetailsTable";

function App() {
  const [yearlyData, setYearlyData] = useState([]);
  let startingCapital = 0;
  let startingInterest = 0;

  const calculateHandler = (userInput) => {
    const data = [];

    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlyContribution;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    let totalInterest = 0;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;

      data.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        investedCapital: 0,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    startingCapital = +userInput.currentSavings + +userInput.yearlyContribution;
    startingInterest = data[0].yearlyInterest;
    setYearlyData(data);
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <CalculatorForm onFormDataChange={calculateHandler} />

      {yearlyData.length > 0 ? (
        <DetailsTable
          yearlyData={yearlyData}
          capital={startingCapital}
          interest={startingInterest}
        />
      ) : (
        <p className="center">Looks Empty!!</p>
      )}
    </div>
  );
}

export default App;
