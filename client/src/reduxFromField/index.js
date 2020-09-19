import React from 'react';
import {TextField} from '@material-ui/core';

const renderTextField = (props)=>{

  const {  label, type,text,
    input,length,
    meta: { touched, invalid, error },
    ...custom}= props


      return <TextField
            label={label}
            variant='outlined'
            error={touched && invalid}
            type={type ? type:'text'}
            helperText={touched && error? error:text}
            multiline
            rows={length ? length:null}
            {...input}
            {...custom}
          />

}

export default renderTextField;



