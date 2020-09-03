import { Slider as MuiSlider } from '@material-ui/core';
import { SliderProps as MuiSliderProps } from '@material-ui/core/Slider';
import React from 'react';

import { RHFInputProps } from './Props';
import { Controller, useFormContext } from 'react-hook-form';

export interface SliderProps extends MuiSliderProps {
  name: string;
  RHFInputProps?: Partial<RHFInputProps>;
}

const Slider = ({ name, RHFInputProps, ...rest }: SliderProps) => {
  const { getValues, control } = useFormContext();

  const defaultValue = getValues()[name];
  return (
    <Controller
      control={control}
      name={name}
      onChange={([_, value]) => {
        return value
      }}
      as={MuiSlider}
      defaultValue={defaultValue}
    />
  )
};

export default Slider;
