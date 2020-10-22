import React from 'react';

import { useFormContext } from 'react-hook-form';
import { ErrorMessage as HookFormErrorMessage } from '@hookform/error-message';
import FormHelperText, { FormHelperTextProps } from '@material-ui/core/FormHelperText';

export type ErrorMessageProps = Omit<FormHelperTextProps, 'name' | 'error'> & {
  name: string;
  message?: string;
};

const ErrorMessage = ({ name, message, ...rest }: ErrorMessageProps) => {
  const { errors } = useFormContext();

  return (
    <HookFormErrorMessage
      errors={errors}
      name={name}
      message={message}
      render={({ message, messages }) => (
        <React.Fragment>
          {typeof messages === 'object' ? (
            Object.keys(messages).map(key => (
              <FormHelperText key={key} error {...rest}>
                {messages[key]}
              </FormHelperText>
            ))
          ) : (
            <FormHelperText error {...rest}>
              {message}
            </FormHelperText>
          )}
        </React.Fragment>
      )}
    />
  );
};

export default ErrorMessage;
