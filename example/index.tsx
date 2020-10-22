import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
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
import { FormProvider } from 'react-hook-form';

import { TextField, Select, Slider, Checkbox, Switch, RadioGroup } from '../.';

const App = () => {
  const form = useForm();

  const handleSubmit = form.handleSubmit((data: any) => {
    console.log('[Submit]', data);
  });

  return (
    <Paper style={{ padding: 8 }}>
      <Typography variant="h5" gutterBottom>
        Form
      </Typography>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <TextField id="firstName" name="firstName" label="firstName" />
            </Grid>
            <Grid item md={6}>
              <TextField id="lastName" name="lastName" label="lastName" />
            </Grid>
            <Grid item md={6}>
              <FormControl>
                <TextField id="email" name="email" type="email" label="email" rules={{ required: true }} />
                <FormHelperText id="my-helper-text">We&apos;ll never share your email.</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item md={6} />
            <Grid item md={6}>
              <TextField id="address" name="address" type="address" label="Address" multiline rows={3} />
            </Grid>
            <Grid item md={6} />
            <Grid item md={6}>
              <InputLabel id="age" required>
                Age
              </InputLabel>
              <Select labelId="age" id="age" value="20" name="age" rules={{ required: true }}>
                <MenuItem value="10">Ten</MenuItem>
                <MenuItem value="20">Twenty</MenuItem>
              </Select>
            </Grid>
            <Grid item md={6}>
              <Slider name="Volume" />
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
          <DevTool control={form.control} />
        </form>
      </FormProvider>
    </Paper>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
