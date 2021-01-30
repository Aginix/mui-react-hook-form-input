import { Controller, useFormContext } from 'react-hook-form';
import { KeyboardDatePicker as MuiKeyboardDatePicker, KeyboardDatePickerProps } from '@material-ui/pickers';
import React from 'react';

import { BaseProps } from './props';

export interface MuiKeyboardDatePickerProps
  extends BaseProps,
    Omit<KeyboardDatePickerProps, 'value' | 'onChange' | 'name'> {}

const KeyboardDatePicker = ({ name, rules, defaultValue, ...rest }: MuiKeyboardDatePickerProps) => {
  const { control, errors } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ name, onBlur, onChange, value }) => (
        <MuiKeyboardDatePicker
          error={!!errors[name]}
          {...rest}
          onBlur={onBlur}
          onChange={value => {
            onChange(value);
          }}
          value={value}
          name={name}
        />
      )}
      defaultValue={defaultValue || ''}
    />
  );
};

export default KeyboardDatePicker;
