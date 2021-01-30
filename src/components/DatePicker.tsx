import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker as MuiDatePicker, DatePickerProps } from '@material-ui/pickers';
import React from 'react';

import { BaseProps } from './props';

export interface MuiDatePickerProps extends BaseProps, Omit<DatePickerProps, 'value' | 'onChange' | 'name'> {}

const DatePicker = ({ name, rules, defaultValue, ...rest }: MuiDatePickerProps) => {
  const { control, errors } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ name, onBlur, onChange, value }) => (
        <MuiDatePicker
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

export default DatePicker;
