import { RadioGroup as MuiRadioGroup } from '@material-ui/core';
import { RadioGroupProps as MuiRadioGroupProps } from '@material-ui/core/RadioGroup';
import { Controller, ValidationRules } from 'react-hook-form';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export interface RadioGroupProps extends MuiRadioGroupProps {
  name: string;
  rules?: ValidationRules;
}

const RadioGroup = ({ name, rules, defaultValue, ...rest }: RadioGroupProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue || null}
      render={({ onChange, value }) => <MuiRadioGroup onChange={onChange} aria-label={name} value={value} {...rest} />}
    />
  );
};

export default RadioGroup;
