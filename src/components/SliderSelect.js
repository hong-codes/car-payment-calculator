import React, { Fragment } from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  console.log(data);

  const bank_limit = 10000;
  return (
    <>
      <SliderComponent
        label="Car Value"
        min={1000}
        max={bank_limit}
        defaultValue={data.carValue}
        value={data.carValue}
        step={100}
        onChange={(e, value) =>
          setData({
            // using spread operator, ...data, keeps old data intact
            ...data,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
            carValue: value,
          })
        }
        unit="$"
        amount={data.carValue}
      />
      <SliderComponent
        label="Down Payment"
        min={0}
        max={data.carValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={100}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: (data.carValue - value), 
            downPayment: value,
          })
        }
        unit="$"
        amount={data.downPayment}
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={data.carValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={100}
        onChange={(e, value) => setData({
          ...data,
          downPayment: (data.carValue - value),
          loanAmount: value
        })}
        unit="$"
        amount={data.loanAmount}
      />
      <SliderComponent
        label="Interest Rate"
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={0.5}
        onChange={(e, value) => setData({
          ...data,
          interestRate: value
        })}
        unit="%"
        amount={data.interestRate}
      />
    </>
  );
};

export default SliderSelect;