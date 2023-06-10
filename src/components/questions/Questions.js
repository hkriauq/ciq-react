import React from 'react'
import './Questions.css';

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


export default Questions
