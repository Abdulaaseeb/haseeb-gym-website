import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { win32 } from 'path';

export default function SelectVariants() {
  const [age, setAge] = React.useState('');

  const handleChange = (event:any) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, }} className='w-100'>
        <InputLabel id="demo-simple-select-standard-label">Boxing</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={"Boxing"}><b>Boxing</b></MenuItem>
          <MenuItem value={"Saiful Islam"}>Saiful Islam</MenuItem>
          <MenuItem value={"Arafath Miya"}>Arafath Miya</MenuItem>
          <MenuItem value={"Shakil Miya"}>Shakil Miya</MenuItem>
          <MenuItem value={"Arafath Miya"}>Arafath Miya</MenuItem>
          <MenuItem value={"Tamim sharker"}>Tamim sharker</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}