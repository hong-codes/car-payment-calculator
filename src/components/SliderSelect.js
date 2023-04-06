import React, { Fragment } from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <>
      <SliderComponent
        label="Car Value"
        min={1000}
        max={50000}
        defaultValue={30000}
        step={1000}
        onChange={(e, value) => console.log(value)}
        unit="$"
        amount={3000}
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
    </>
  );
};

export default SliderSelect;
