import * as React from 'react';
import Button from '@mui/material/Button';
type btntype = {
    btnValue : string,
}

export default function BasicButtons(props:btntype) {
  return (
      <Button color='error' className='navBtn' variant="contained">{props.btnValue}</Button> 
  );
}