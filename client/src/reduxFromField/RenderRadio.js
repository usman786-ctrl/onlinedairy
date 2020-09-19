import React from 'react';
import Radio from '@material-ui/core/Radio';
import {FormControlLabel,RadioGroup,FormControl,FormLabel,FormHelperText} from '@material-ui/core'


const radioButton = ({ input, meta,...rest }) => (
  
    <FormControl>
        <FormLabel component="legend">Stroy status</FormLabel>
      <RadioGroup {...input} {...rest}>
        <FormControlLabel value="public" control={<Radio />} label="public" />
        <FormControlLabel value="private" control={<Radio />} label="private" />
      </RadioGroup>
    {meta.error && meta.touched  && <FormHelperText style={{color:'red'}}>{'required'} </FormHelperText>}

    </FormControl>
  )

  export default radioButton;

  