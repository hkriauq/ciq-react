import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import'./SelectQuestions.css';

function SelectQuestions(props) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    props.setQuestion(event.target.value);
  };

  const question1 = "01:腕時計問題"
  const question2 = "02:電車業界問題"
  const question3 = "03:携帯業界問題"
  const question4 = "04:缶コーヒー問題"
  const question5 = "05:お掃除ロボット問題"
  const question6 = "06:ビジネスホテル問題"
  const question7 = "07:アパレル問題"
  const question8 = "08:航空会社問題"
  const question9 = "09:コンビニ問題"
  const question10 = "10:サブスク問題"

  return (
    <div className='pulldown'>
      <FormControl>
        <InputLabel id="select-label">問題を選択する</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={selectedOption}
          label="Options"
          onChange={handleChange}
        >
          <MenuItem value={question1}>{question1}</MenuItem>
          <MenuItem value={question2}>{question2}</MenuItem>
          <MenuItem value={question3}>{question3}</MenuItem>
          <MenuItem value={question4}>{question4}</MenuItem>
          <MenuItem value={question5}>{question5}</MenuItem>
          <MenuItem value={question6}>{question6}</MenuItem>
          <MenuItem value={question7}>{question7}</MenuItem>
          <MenuItem value={question8}>{question8}</MenuItem>
          <MenuItem value={question9}>{question9}</MenuItem>
          <MenuItem value={question10}>{question10}</MenuItem>

        </Select>
      </FormControl>
    </div>
  );
};

export default SelectQuestions;