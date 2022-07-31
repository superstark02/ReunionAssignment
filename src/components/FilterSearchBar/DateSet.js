import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// Component to get Date from user
export default function DateSet({handler}) {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker 
        label="Select Move in Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          handler(newValue);
        }}
        renderInput={(params) => <TextField sx={{padding:0}} variant='standard' {...params} />}
      />
    </LocalizationProvider>
  );
}
