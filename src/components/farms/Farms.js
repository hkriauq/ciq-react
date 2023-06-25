import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import'./Farms.css';

function Farms() {
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="demo-select-label">ファーム種別を選択</InputLabel>
      <Select
        labelId="demo-select-label"
        id="demo-select"
        value={selectedOption}
        label="Options"
        onChange={handleChange}
      >
        <MenuItem value="option1">戦略系（MBB等）</MenuItem>
        <MenuItem value="option2">総合系（BIG4等）</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Farms


/*
const farms = ["--Please Select--","戦略系（MBB等）", "総合系（BIG4等）"];

  const Farms = () => {
    return (
      <div className='select'>
        <select>
          {farms.map((farm) => {
            return <option key={farm}>{farm}</option>;
          })}
        </select>
      </div>
    );
  }; 


export default Farms */