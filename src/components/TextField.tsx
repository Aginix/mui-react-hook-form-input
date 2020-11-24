import { TextField as MuiTextField } from '@material-ui/core';
import { TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';
import React from 'react';

import { useFormContext, Controller } from 'react-hook-form';

import { BaseProps } from './props';

export interface TextFieldProps extends BaseProps, Omit<MuiTextFieldProps, 'name'> {}

const TextField = ({ name, rules, defaultValue, ...rest }: TextFieldProps) => {
  const { control, errors } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ name, onBlur, onChange, value }) => (
        <MuiTextField error={!!errors[name]} {...rest} onBlur={onBlur} onChange={onChange} value={value} name={name} />
      )}
      defaultValue={defaultValue || ''}
    />
  );
};

export default TextField;
