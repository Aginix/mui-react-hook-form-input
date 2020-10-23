import { useFormContext } from 'react-hook-form';
import { DatePicker as MuiDatePicker, DatePickerProps } from '@material-ui/pickers';
import React from 'react';

import { BaseProps } from './props';

export interface MuiDatePickerProps extends BaseProps, Omit<DatePickerProps, 'value' | 'onChange' | 'name'> {}

const DatePicker = ({ name, ...rest }: MuiDatePickerProps) => {
  const { register, setValue, watch } = useFormContext();
  const value = watch(name, null);

  React.useEffect(() => {
    register({ name });
  }, [register, name]);

  const handleChange = React.useCallback(
    (value: Date | null) => {
      setValue(name, value);
    },
    [name, setValue]
  );
  return <MuiDatePicker name={name} value={value} onChange={(value: Date | null) => handleChange(value)} {...rest} />;
};

export default DatePicker;
