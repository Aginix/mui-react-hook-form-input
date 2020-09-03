import { TextField as MuiTextField } from '@material-ui/core';
import { TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';
import React, { Fragment } from 'react';
import { RHFInput } from 'react-hook-form-input';

import { useFormContext } from 'react-hook-form';
import { RHFInputProps } from './Props';

export type TextFieldProps = MuiTextFieldProps & {
  name: string;
  RHFInputProps?: Partial<RHFInputProps>;
};

const TextField = ({ name, RHFInputProps, ...rest }: TextFieldProps) => {
  const { register, setValue, errors } = useFormContext();

  return (
    <RHFInput
      {...RHFInputProps}
      name={name}
      register={register}
      setValue={setValue}
      defaultValue=""
      as={
        <MuiTextField
          size="small"
          fullWidth
          variant="outlined"
          error={!!errors[name]}
          helperText={<Fragment>{errors[name]?.message}</Fragment>}
          {...rest}
        />
      }
    />
  );
};

export default TextField;
