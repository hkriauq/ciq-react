import React, { useState } from 'react';
import './Questions.css';
import SelectFarms from './SelectFarms';
import SelectQuestions from './SelectQuestions';
import Button from '@mui/material/Button';
import Consideration from './components/consideration/Consideration';

function Questions() {
  const [selectedOptionFarms, setSelectedOptionFarms] = useState(null);
  const [selectedOptionQuestions, setSelectedOptionQuestions] = useState(null);
  const [showConsideration, setShowConsideration] = useState(false);

  const handleButtonClick = () => {
    if (selectedOptionFarms && selectedOptionQuestions) {
      setShowConsideration(true);
    } else {
      console.log("選択してください");
    }
  };

  return (
    <div>
      <SelectFarms onChange={setSelectedOptionFarms} />
      <SelectQuestions onChange={setSelectedOptionQuestions} />
      <Button onClick={handleButtonClick} disabled={!selectedOptionFarms || !selectedOptionQuestions}>
        検討を開始する
      </Button>
      {showConsideration && <Consideration />}
    </div>
  );
};

export default Questions;
