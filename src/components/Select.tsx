import { Select as MuiSelect } from '@material-ui/core';
import { SelectProps as MuiSelectProps } from '@material-ui/core/Select';
import React from 'react';

import { Controller, useFormContext, ValidationRules } from 'react-hook-form';

export interface SelectProps extends MuiSelectProps {
  name: string;
  rules?: ValidationRules;
}

const Select = ({ name, rules, ...rest }: SelectProps) => {
  const { control, getValues, errors } = useFormContext();

  const defaultValue = getValues()[name];
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue || ''}
      as={<MuiSelect {...rest} defaultValue={defaultValue} error={!!errors[name]} />}
    />
  );
};

export default Select;
