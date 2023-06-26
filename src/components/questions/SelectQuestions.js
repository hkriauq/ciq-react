import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import'./SelectQuestions.css';

function SelectQuestions() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{textAlign: 'center'}}>
      <p>問題を選択してください</p>
      <FormControl>
        <InputLabel id="select-label">問題を選択する</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={selectedOption}
          label="Options"
          onChange={handleChange}
        >
          <MenuItem value="option1">01:腕時計問題</MenuItem>
          <MenuItem value="option2">02:電車業界問題</MenuItem>
          <MenuItem value="option3">03:携帯業界問題</MenuItem>
          <MenuItem value="option4">04:缶コーヒー問題</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectQuestions