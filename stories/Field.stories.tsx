import {
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  FormHelperText,
  MenuItem,
  Radio,
  FormLabel,
} from '@material-ui/core';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';

import Form, { TextField, Select, Switch, Slider, RadioGroup, Checkbox } from '../src'

const Wrapper: React.FC<{}> = ({ children }) => {
  const form = useForm<any>({
    defaultValues: {
      volume: 0,
    }
  });

  const handleSubmit = form.handleSubmit((data: any) => {
    action('submit')(data);
    console.log('[Submit]', data);
  });

  return (
    <Form form={form} onSubmit={handleSubmit}>
      {children}
    </Form>
  )
}

export default {
  title: 'Fields',
  decorators: [(storyFn: any) => <Wrapper><div style={{ margin: 8 }}>{storyFn()}</div></Wrapper>],
};

export const SampleTextField = () => {
  return <TextField id="firstName" name="firstName" label="firstName" />
}
SampleTextField.story = {
  name: 'TextField',
};

export const SampleSelect = () => {
  return (
    <div>
      <InputLabel id="age" required>
        Age
      </InputLabel>
      <Select labelId="age" id="age" value="20" name="age" RHFInputProps={{ rules: { required: true } }}>
        <MenuItem value="10">Ten</MenuItem>
        <MenuItem value="20">Twenty</MenuItem>
      </Select>
    </div>
  );
};
SampleSelect.story = {
  name: 'Select',
};

export const SampleSlider = () => {
  return <Slider name="volume" />
};
SampleSlider.story = {
  name: 'Slider',
};

export const SampleSwitch = () => {
  return <FormControlLabel control={<Switch name="active" value="true" />} label="Active" />
};
SampleSwitch.story = {
  name: 'Switch',
};

export const SampleRadio = () => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup name="gender">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
      </RadioGroup>
    </FormControl>
  )
};
SampleRadio.story = {
  name: 'Radio',
};

export const SampleCheckbox = () => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Assign responsibility</FormLabel>
      <FormGroup>
        <FormControlLabel control={<Checkbox name="gilad" />} label="Gilad Gray" />
        <FormControlLabel control={<Checkbox name="jason" />} label="Jason Killian" />
        <FormControlLabel control={<Checkbox name="antoine" />} label="Antoine Llorca" />
      </FormGroup>
      <FormHelperText>Be careful</FormHelperText>
    </FormControl>
  )
};
SampleCheckbox.story = {
  name: 'Checkbox',
};