import React, { createContext, useContext } from 'react';
import { FieldValues, FormContextValues } from 'react-hook-form';

export const FormContext = createContext<Partial<FormContextValues>>(null as any);

export interface Props {
  form: FormContextValues<FieldValues>;
  onSubmit?: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export const Form: React.FC<Props> = ({ children, onSubmit, form }) => (
  <FormContext.Provider value={form}>
    <form onSubmit={onSubmit}>{children}</form>
  </FormContext.Provider>
);

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('Cannot get FormContext');
  }

  return context as FormContextValues<FieldValues>;
};

export default Form;
