import React from 'react'
import {Checkbox} from '@material-ui/core';
import {FormControlLabel,FormHelperText,FormControl} from '@material-ui/core'

const renderCheckbox = (props)=>{
  const { touched, invalid, error }=props.meta;
 const { input, label }= props;

  

    return( 
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={input.value ? true : false}
            onChange={input.onChange}
          />
        }
        label={label}
       required={true}
        

      
      />
    {error && touched  ? <FormHelperText style={{color:'red'}}>{'required'} </FormHelperText>:<FormHelperText>{'only for public stories'} </FormHelperText>}


    </FormControl>
  )}

  export default renderCheckbox;