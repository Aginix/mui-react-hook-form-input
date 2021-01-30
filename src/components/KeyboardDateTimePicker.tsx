import { Controller, useFormContext } from 'react-hook-form';
import { KeyboardDateTimePicker as MuiKeyboardDateTimePicker, KeyboardDateTimePickerProps } from '@material-ui/pickers';
import React from 'react';

import { BaseProps } from './props';

export interface MuiKeyboardDateTimePickerProps
  extends BaseProps,
    Omit<KeyboardDateTimePickerProps, 'value' | 'onChange' | 'name'> {}

const KeyboardDateTimePicker = ({ name, rules, defaultValue, ...rest }: MuiKeyboardDateTimePickerProps) => {
  const { control, errors } = useFormContext();

  return <Controller
    control={control}
    name={name}
    rules={rules}
    render={({ name, onBlur, onChange, value }) => (
      <MuiKeyboardDateTimePicker
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
};

export default KeyboardDateTimePicker;
