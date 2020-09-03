import {
  Button,
  Grid,
  Paper,
  Typography,
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
import { useForm, ErrorMessage } from 'react-hook-form';

import Form, { TextField, Select, Switch, Slider, RadioGroup, Checkbox } from '../src'

export default {
  title: 'Form',
  decorators: [(storyFn: any) => <div style={{ margin: 8 }}>{storyFn()}</div>],
};

export const Default = () => {
  const form = useForm<any>({
    defaultValues: {
      volume: 10,
    }
  });

  const handleSubmit = form.handleSubmit((data: any) => {
    action('submit')(data);
    console.log('[Submit]', data);
  });

  return (
    <Paper style={{ padding: 8 }}>
      <Typography variant="h5" gutterBottom>
        Form
      </Typography>
      <Form form={form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <TextField id="firstName" name="firstName" label="firstName" />
          </Grid>
          <Grid item md={6}>
            <TextField id="lastName" name="lastName" label="lastName" />
          </Grid>
          <Grid item md={6}>
            <FormControl>
              <TextField
                id="email"
                name="email"
                type="email"
                label="email"
                RHFInputProps={{ rules: { required: 'Email is required!' } }}
              />
              <FormHelperText id="my-helper-text">We&apos;ll never share your email.</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item md={6} />
          <Grid item md={6}>
            <TextField id="address" name="address" type="address" label="Address" multiline rows={3} />
          </Grid>
          <Grid item md={6} />
          <Grid item md={6}>
            <FormControl variant="outlined" margin="dense" fullWidth>
              <InputLabel id="age" required>
                Age
              </InputLabel>
              <Select labelId="age" id="age" value="20" name="age" label="Age" RHFInputProps={{ rules: { required: 'Age is required!' } }}>
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
              </Select>
            </FormControl>
            <ErrorMessage errors={form.errors} name="age">
              {({ message }) => <FormHelperText error>{message}</FormHelperText>}
            </ErrorMessage>
          </Grid>
          <Grid item md={6}>
            <Slider name="volume" />
          </Grid>
          <Grid item md={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup name="gender">
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
                <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item md={6}>
            <FormControlLabel control={<Switch name="active" value="true" />} label="Active" />
          </Grid>
          <Grid item md={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Assign responsibility</FormLabel>
              <FormGroup>
                <FormControlLabel control={<Checkbox name="gilad" />} label="Gilad Gray" />
                <FormControlLabel control={<Checkbox name="jason" />} label="Jason Killian" />
                <FormControlLabel control={<Checkbox name="antoine" />} label="Antoine Llorca" />
              </FormGroup>
              <FormHelperText>Be careful</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Paper>
  );
};
