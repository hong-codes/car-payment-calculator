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
            carValue: value,
          })
        }
        unit="$"
        amount={data.carValue}
      />
      <SliderComponent
        label="Down Payment"
        min={1000}
        max={30000}
        defaultValue={15000}
        step={1000}
        onChange={(e, value) => console.log(value)}
        unit="$"
        amount={1000}
      />
      <SliderComponent
        label="Loan Value"
        min={1000}
        max={20000}
        defaultValue={15000}
        step={1000}
        onChange={(e, value) => console.log(value)}
        unit="$"
        amount={500}
      />
      <SliderComponent
        label="Interest Rate"
        min={1}
        max={10}
        defaultValue={5}
        step={0.1}
        onChange={(e, value) => console.log(value)}
        unit="%"
        amount={500}
      />
    </>
  );
};

export default SliderSelect;
