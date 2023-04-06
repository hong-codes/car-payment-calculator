import React, { Fragment } from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const SliderComponent = ({ defaultValue, min, max, step, onChange, value, label, unit, amount }) => {
  return (
    <Fragment>
      {/* Fake Dom */}
      <Stack gap={1}>
        <Typography variant="h3">{label}</Typography>
        <Typography variant="subtitle1">{unit} {amount}</Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks
        step={step}
        onChange={onChange}
        value={value}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">{unit} {min}</Typography>
        <Typography variant="caption" color="text.secondary">{unit} {max}</Typography>
      </Stack>
    </Fragment>
  );
};

export default SliderComponent;
