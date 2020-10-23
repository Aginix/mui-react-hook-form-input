import { useFormContext } from 'react-hook-form';
import { TimePicker as MuiTimePicker, TimePickerProps } from '@material-ui/pickers';
import React from 'react';

import { BaseProps } from './props';

export interface MuiTimePickerProps extends BaseProps, Omit<TimePickerProps, 'value' | 'onChange' | 'name'> {}

const TimePicker = ({ name, rules, ...rest }: MuiTimePickerProps) => {
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

  return <MuiTimePicker name={name} value={value} onChange={(value: Date | null) => handleChange(value)} {...rest} />;
};

export default TimePicker;
