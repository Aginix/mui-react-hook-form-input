import { useFormContext } from 'react-hook-form';
import { KeyboardDatePicker as MuiKeyboardDatePicker, KeyboardDatePickerProps } from '@material-ui/pickers';
import React from 'react';

import { BaseProps } from './props';

export interface MuiKeyboardDatePickerProps
  extends BaseProps,
    Omit<KeyboardDatePickerProps, 'value' | 'onChange' | 'name'> {}

const KeyboardDatePicker = ({ name, rules, ...rest }: MuiKeyboardDatePickerProps) => {
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
    <MuiKeyboardDatePicker name={name} value={value} onChange={(value: Date | null) => handleChange(value)} {...rest} />
  );
};

export default KeyboardDatePicker;
