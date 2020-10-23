import { useFormContext } from 'react-hook-form';
import { KeyboardTimePicker as MuiKeyboardTimePicker, KeyboardTimePickerProps } from '@material-ui/pickers';
import React from 'react';

import { BaseProps } from './props';

export interface MuiKeyboardTimePickerProps extends BaseProps, Omit<KeyboardTimePickerProps, 'value' | 'onChange' | 'name'> {}

const KeyboardTimePicker = ({ name, rules, ...rest }: MuiKeyboardTimePickerProps) => {
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
    <MuiKeyboardTimePicker name={name} value={value} onChange={(value: Date | null) => handleChange(value)} {...rest} />
  );
};

export default KeyboardTimePicker;
