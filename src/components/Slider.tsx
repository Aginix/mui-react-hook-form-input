import { Slider as MuiSlider } from '@material-ui/core';
import { SliderProps as MuiSliderProps } from '@material-ui/core/Slider';
import React from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import { BaseProps } from './props';

export interface SliderProps extends BaseProps, Omit<MuiSliderProps, 'name'> {}

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
          {...rest}
        />
      )}
      defaultValue={defaultValue}
    />
  );
};

export default Slider;
