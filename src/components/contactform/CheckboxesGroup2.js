import React , { useState } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';




function CheckboxesGroup2() {
  const [state, setState] = useState({
    one: false,
    two: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { one, two } = state;
  const error = [ one, two ].filter((v) => v).length !== 1;

  return (
    <Box>
      <div className='questionnaire-1'>
        <p>フィードバックを希望しますか？　＊必須＊　</p>
      </div>
 
      <FormControl
        required
        error={error}
        component="fieldset"
        variant="standard"
      >
        <FormLabel component="legend">１つ選ぶ</FormLabel>
        <FormGroup style={{ textAlign: 'left' }}>
          <FormControlLabel
            control={
              <Checkbox checked={one} onChange={handleChange} name="one" />
            }
            label="フィードバックを希望する（2,200円/税込）"
          />
          <FormControlLabel
            control={
              <Checkbox checked={two} onChange={handleChange} name="two" />
            }
            label="フィードバックを希望しない（無料）"
          />
        </FormGroup>
        {/*<FormHelperText>１つ以上選んでいます</FormHelperText>*/}
      </FormControl>
    </Box>
  );
}

export default CheckboxesGroup2;