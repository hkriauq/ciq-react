import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import'./Questions.css';

function Questions() {
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="demo-select-label">問題を選択する</InputLabel>
      <Select
        labelId="demo-select-label"
        id="demo-select"
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
  );
};

export default Questions




/*
const questions = ["--Please Select--","01:腕時計問題", "02:電車業界問題","03:携帯業界問題", "04:缶コーヒー問題"];

  const Questions = () => {
    return (
      <div className='select'>
        <select>
          {questions.map((question) => {
            return <option key={question}>{question}</option>;
          })}
        </select>
      </div>
    );
  };


export default Questions */