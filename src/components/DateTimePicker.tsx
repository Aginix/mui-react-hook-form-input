import { useFormContext } from 'react-hook-form';
import { DateTimePicker as MuiDateTimePicker, DateTimePickerProps } from '@material-ui/pickers';
import React from 'react';

import { BaseProps } from './props';

export interface MuiDateTimePickerProps extends BaseProps, Omit<DateTimePickerProps, 'value' | 'onChange' | 'name'> {}

const DateTimePicker = ({ name, rules, ...rest }: MuiDateTimePickerProps) => {
  const { register, setValue, watch } = useFormContext();
  const value = watch(name, null);

  React.useEffect(() => {
    register({ name }, rules);
  }, [register, name, rules]);

  const handleChange = React.useCallback(
    (value: Date | null) => {
      setValue(name, value);
    },
    [name, setValue]
  );

  return (
    <MuiDateTimePicker name={name} value={value} onChange={(value: Date | null) => handleChange(value)} {...rest} />
  );
};

export default DateTimePicker;
