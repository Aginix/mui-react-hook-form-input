import {
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  FormHelperText,
  MenuItem,
  Radio,
  FormLabel,
  Button,
} from '@material-ui/core';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { useForm, FormProvider } from 'react-hook-form';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {
  TextField,
  Select,
  Switch,
  Slider,
  RadioGroup,
  Checkbox,
  DatePicker,
  DateTimePicker,
  TimePicker,
  KeyboardDatePicker,
  KeyboardDateTimePicker,
  KeyboardTimePicker,
} from '../src';

const Wrapper: React.FC<{}> = ({ children }) => {
  const form = useForm<any>({
    defaultValues: {
      volume: 0,
      age: '10',
    },
  });

  const handleSubmit = form.handleSubmit((data: any) => {
    action('submit')(data);
    console.log('[Submit]', data);
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit}>
          {children}
          <div>
            <Button variant="outlined" type="submit">Submit</Button>
          </div>
        </form>
      </FormProvider>
    </MuiPickersUtilsProvider>
  );
};

export default {
  title: 'Fields',
  decorators: [
    (storyFn: any) => (
      <Wrapper>
        <div style={{ margin: 8 }}>{storyFn()}</div>
      </Wrapper>
    ),
  ],
};

export const SampleTextField = () => {
  return <TextField id="firstName" name="firstName" label="firstName" />;
};
SampleTextField.story = {
  name: 'TextField',
};

export const SampleSelect = () => {
  return (
    <div>
      <InputLabel id="age" required>
        Age
      </InputLabel>
      <Select labelId="age" id="age" value="20" name="age" rules={{ required: true }}>
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
  return <Slider name="volume" />;
};
SampleSlider.story = {
  name: 'Slider',
};

export const SampleSwitch = () => {
  return <FormControlLabel control={<Switch name="active" value="true" />} label="Active" />;
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
  );
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
  );
};
SampleCheckbox.story = {
  name: 'Checkbox',
};

export const SampleDatePicker = () => {
  return <DatePicker label="DatePicker" name="date" />;
};
SampleDatePicker.story = {
  name: 'DatePicker',
};

export const SampleDateTimePicker = () => {
  return <DateTimePicker label="DateTimePicker" name="datetime" />;
};
SampleDateTimePicker.story = {
  name: 'DateTimePicker',
};

export const SampleTimePicker = () => {
  return <TimePicker label="TimePicker" name="time" />;
};
SampleTimePicker.story = {
  name: 'TimePicker',
};

export const SampleKeyboardDatePicker = () => {
  return <KeyboardDatePicker label="KeyboardDatePicker" name="keyboarddate" />;
};
SampleKeyboardDatePicker.story = {
  name: 'KeyboardDatePicker',
};

export const SampleKeyboardDateTimePicker = () => {
  return <KeyboardDateTimePicker label="KeyboardDateTimePicker" name="keyboarddatetime" />;
};
SampleKeyboardDateTimePicker.story = {
  name: 'KeyboardDateTimePicker',
};

export const SampleKeyboardTimePicker = () => {
  return <KeyboardTimePicker label="KeyboardTimePicker" name="keyboardtime" />;
};
SampleKeyboardTimePicker.story = {
  name: 'KeyboardTimePicker',
};
