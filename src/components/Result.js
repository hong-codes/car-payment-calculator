import { Stack, Typography } from "@mui/material";
import React from "react";

const Result = ({ data }) => {
  // destructuring data so you don't need to type data. for each one. Example: data.carValue
  const { carValue, downPayment, loanAmount, loanTerm, interestRate } = data;

  const totalLoanMonths = loanTerm * 12; // 60 months = 5 years
  const interestPerMonth = interestRate / 100 / 12; //100 @ 12% for 1 year

  const monthlyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  return (
    <Stack>
      <Typography>Monthly Payment: $ {monthlyPayment}</Typography>
    </Stack>
  );
};

export default Result;
