import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import'./SelectFarms.css';

function SelectFarms() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    <div className='pulldown'>
      <FormControl>
      <InputLabel id="select-label">ファーム種別を選択</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={selectedOption}
        label="Options"
        onChange={handleChange}
      >
        <MenuItem value="option1">戦略系（MBB等）</MenuItem>
        <MenuItem value="option2">総合系（BIG4等）</MenuItem>
      </Select>
      </FormControl>
    </div>
  );
};

export default SelectFarms


