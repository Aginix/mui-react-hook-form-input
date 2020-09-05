import { Slider as MuiSlider } from '@material-ui/core';
import { SliderProps as MuiSliderProps } from '@material-ui/core/Slider';
import React from 'react';

import { RHFInputProps } from './Props';
import { Controller, useFormContext, ValidationRules } from 'react-hook-form';

export interface SliderProps extends MuiSliderProps {
  name: string;
  rules?: ValidationRules;
}

const Slider = ({ name, rules, ...rest }: SliderProps) => {
  const { getValues, control } = useFormContext();

  const defaultValue = getValues()[name];
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ name, onBlur, onChange, value }) => (
        <MuiSlider
          onBlur={onBlur}
          onChange={(_: React.ChangeEvent<{}>, value: number | number[]) => onChange(value)}
          value={value}
          name={name}
        />
      )}
      defaultValue={defaultValue}
    />
  );
};

export default Slider;
