import { Switch as MuiSwitch } from '@material-ui/core';
import { SwitchProps as MuiSwitchProps } from '@material-ui/core/Switch';
import React from 'react';

import { Controller, useFormContext, ValidationRules } from 'react-hook-form';

export interface SwitchProps extends MuiSwitchProps {
  name: string;
  rules?: ValidationRules;
}

const Switch = ({ name, rules, defaultValue, defaultChecked, ...rest }: SwitchProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue || defaultChecked || false}
      render={({ onChange, value }) => (
        <MuiSwitch onChange={e => onChange(e.target.checked)} checked={value} {...rest} />
      )}
    />
  );
};

export default Switch;
