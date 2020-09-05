import React from 'react';
import { FormProvider, FormProviderProps } from 'react-hook-form';

export interface Props {
  form: FormProviderProps<Record<string, any> | object>;
  onSubmit?: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export const Form: React.FC<Props> = ({ children, onSubmit, form }) => (
  <FormProvider {...form}>
    <form onSubmit={onSubmit}>{children}</form>
  </FormProvider>
);

export default Form;
