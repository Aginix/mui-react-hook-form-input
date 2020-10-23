import { useFormContext } from 'react-hook-form';
import { KeyboardDateTimePicker as MuiKeyboardDateTimePicker, KeyboardDateTimePickerProps } from '@material-ui/pickers';
import React from 'react';

import { BaseProps } from './props';

export interface MuiKeyboardDateTimePickerProps
  extends BaseProps,
    Omit<KeyboardDateTimePickerProps, 'value' | 'onChange' | 'name'> {}

const KeyboardDateTimePicker = ({ name, rules, ...rest }: MuiKeyboardDateTimePickerProps) => {
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
    <MuiKeyboardDateTimePicker
      name={name}
      value={value}
      onChange={(value: Date | null) => handleChange(value)}
      {...rest}
    />
  );
};

export default KeyboardDateTimePicker;
