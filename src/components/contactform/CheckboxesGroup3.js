import React , { useState } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



function CheckboxesGroup3() {
  const [state, setState] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { one, two, three , four , five } = state;
  const error = [ one, two, three , four , five ].filter((v) => v).length !== 1;

  return (
    <Box>
      <div className='questionnaire-1'>
        <p>サービスの利用目的は何ですか？　＊必須＊　</p>
      </div>
 
      <FormControl
        component="fieldset"
        variant="standard"
      >
        <FormLabel component="legend">複数選択可</FormLabel>
        <FormGroup style={{ textAlign: 'left' }}>
          <FormControlLabel
            control={
              <Checkbox checked={one} onChange={handleChange} name="one" />
            }
            label="ブラウザ検索（Googleなど）"
          />
          <FormControlLabel
            control={
              <Checkbox checked={two} onChange={handleChange} name="two" />
            }
            label="Twitter"
          />
          <FormControlLabel
            control={
              <Checkbox checked={three} onChange={handleChange} name="three" />
            }
            label="FaceBook"
          />
          <FormControlLabel
            control={
              <Checkbox checked={four} onChange={handleChange} name="four" />
            }
            label="知人・友人"
          />
          <FormControlLabel
            control={
              <Checkbox checked={five} onChange={handleChange} name="five" />
            }
            label="その他"
          />
        </FormGroup>
        {/*<FormHelperText>１つ以上選んでいます</FormHelperText>*/}
      </FormControl>
    </Box>
  );
}

export default CheckboxesGroup3;