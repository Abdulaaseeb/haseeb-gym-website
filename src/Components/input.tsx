import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
type inputtype = {
    inplabel:string,
    inptype:string
}
export default function BasicTextFields(props:inputtype) {
    const {inplabel,inptype} = props
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" type={inptype} className='w-100' label={inplabel} variant="standard" />
    </Box>
  );
}