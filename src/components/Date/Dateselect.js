import React from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


const Dateselect = () => {
  return (
    <Stack component="form" noValidate spacing={3}>
      <TextField
        id="datetime-local"
        label="Start Date"
        type="datetime-local"
        defaultValue="2022-04-29T08:00"
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Stack>
  )
}

export default Dateselect