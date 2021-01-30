import { Controller, useFormContext } from 'react-hook-form';
import { DateTimePicker as MuiDateTimePicker, DateTimePickerProps } from '@material-ui/pickers';
import React from 'react';

import { BaseProps } from './props';

export interface MuiDateTimePickerProps extends BaseProps, Omit<DateTimePickerProps, 'value' | 'onChange' | 'name'> {}

const DateTimePicker = ({ name, rules, defaultValue, ...rest }: MuiDateTimePickerProps) => {
  const { control, errors } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ name, onBlur, onChange, value }) => (
        <MuiDateTimePicker
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

export default DateTimePicker;
