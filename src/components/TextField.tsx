import { TextField as MuiTextField } from '@material-ui/core';
import { TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';
import React from 'react';

import { useFormContext, Controller, ValidationRules } from 'react-hook-form';

export type TextFieldProps = MuiTextFieldProps & {
  name: string;
  rules?: ValidationRules;
};

const TextField = ({ name, rules, ...rest }: TextFieldProps) => {
  const { control, errors } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ name, onBlur, onChange, value }) => (
        <MuiTextField
          {...rest}
          error={!!errors[name]}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          name={name}
        />
      )}
      defaultValue=""
    />
  );
};

export default TextField;
