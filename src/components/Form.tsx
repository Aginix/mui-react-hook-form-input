import React from 'react';
import { FormContextValues, FormContext } from 'react-hook-form';

export interface Props {
  form: FormContextValues<Record<string, any> | object>;
  onSubmit?: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export const Form: React.FC<Props> = ({ children, onSubmit, form }) => (
  <FormContext {...form}>
    <form onSubmit={onSubmit}>{children}</form>
  </FormContext>
);

export default Form;
