import { Controller, useFormContext } from 'react-hook-form';
import { KeyboardTimePicker as MuiKeyboardTimePicker, KeyboardTimePickerProps } from '@material-ui/pickers';
import React from 'react';

import { BaseProps } from './props';

export interface MuiKeyboardTimePickerProps
  extends BaseProps,
    Omit<KeyboardTimePickerProps, 'value' | 'onChange' | 'name'> {}

const KeyboardTimePicker = ({ name, rules, defaultValue, ...rest }: MuiKeyboardTimePickerProps) => {
  const { control, errors } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ name, onBlur, onChange, value }) => (
        <MuiKeyboardTimePicker
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

export default KeyboardTimePicker;
