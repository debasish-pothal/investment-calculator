import React from "react";
import style from "./DetailsTable.module.css";

function DetailsTable({ yearlyData }) {
  return (
    <table className={style["result"]}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
          <th>Total Savings</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((data, index) => (
          <tr key={index}>
            <td>{data.year}</td>
            <td>${data.yearlyInterest.toFixed(2)}</td>
            <td>${data.totalInterest.toFixed(2)}</td>
            <td>
              $
              {(
                parseFloat(data.savingsEndOfYear.toFixed(2)) -
                parseFloat(data.totalInterest.toFixed(2))
              ).toFixed(2)}
            </td>
            <td>${data.savingsEndOfYear.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DetailsTable;
