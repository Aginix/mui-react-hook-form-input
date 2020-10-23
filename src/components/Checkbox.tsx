import { Checkbox as MuiCheckbox } from '@material-ui/core';
import { CheckboxProps as MuiCheckboxProps } from '@material-ui/core/Checkbox';
import React from 'react';

import { Controller, useFormContext } from 'react-hook-form';

import { BaseProps } from './props';

export interface CheckboxProps extends BaseProps, Omit<MuiCheckboxProps, 'name'> {
  onFocus?: (() => void) | undefined;
}

const Checkbox = ({ name, rules, defaultValue, defaultChecked, onFocus, ...rest }: CheckboxProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue || defaultChecked || false}
      rules={rules}
      onFocus={onFocus}
      render={({ onChange, value }) => (
        <MuiCheckbox onChange={e => onChange(e.target.checked)} checked={value} {...rest} />
      )}
    />
  );
};

export default Checkbox;
