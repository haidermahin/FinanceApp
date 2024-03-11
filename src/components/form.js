import React, { useState } from "react";
import { FormInputGroup } from "./FormInputGroup";
import { FaDollarSign  , FaPercent } from "react-icons/fa";

export const Myform = () => {
  const [propertyValue, setPropertyValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  function calculateLoanAmount() {
    setLoanAmount(propertyValue - downPayment);
    return loanAmount;
  }

  function monthlyPayments() {
    function percentToDecimal(val) {
      return val / 12 / 100;
    }

    function yearsToMonths(year) {
      return year * 12;
    }
    setMonthlyPayment(
      (percentToDecimal(interestRate) * loanAmount) /
        (1 - Math.pow(1 + percentToDecimal(interestRate), -yearsToMonths(loanAmount)))
    );
    return monthlyPayment;
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="bg-[#F2F2F2] p-6 rounded-lg">
      <FormInputGroup
        text="Property Value"
        icon={<FaDollarSign className="text-[#BB0000]" />}
        placeholder="Enter the value of the property"
        onKeyUp={calculateLoanAmount}
        value={propertyValue}
        onInput={(e) => setPropertyValue(e.target.value)}
      />
      <FormInputGroup
        text="Down Payment"
        icon={<FaDollarSign className="text-[#BB0000]" />}
        placeholder="Enter your down payment"
        onKeyUp={calculateLoanAmount}
        value={downPayment}
        onInput={(e) => setDownPayment(e.target.value)}
      />
        <FormInputGroup
         text="Interest rate"
         icon={<FaPercent />}
         placeholder="Enter the interest rate"
         value={interestRate}
         onInput={(e) => setInterestRate(e.target.value)}
    />
      <FormInputGroup
        text="Interest rate"
        placeholder="Enter the interest rate"
        value={interestRate}
        onInput={(e) => setInterestRate(e.target.value)}
      />
      <FormInputGroup
        text="Loan duration"
        placeholder="Enter the loan duration"
        value={loanDuration}
        onInput={(e) => setLoanDuration(e.target.value)}
      />

    <button
    type="submit"
    className="bg-[#572A84] text-white text-lg py-2 px-3 md:px-4 w-2/3 md:w-1/2 rounded-lg mt-4"
    onClick={monthlyPayments}
    >
    Calculate
    </button>

      {monthlyPayment && (
        <h4 className="mt-4 border-l-4 border-[#BB0000] p-4 mb-50 bg-white rounded-lg" role="alert">
          Your monthly payment is: ${monthlyPayment}
        </h4>
      )}
    </form>
  );
};