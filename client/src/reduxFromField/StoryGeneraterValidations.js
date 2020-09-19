const validate = values => {
    const errors = {}
    if (!values.title) {
      errors.title = 'Required'
    }
 
    if (!values.body) {
      errors.body = 'Required'
    }

    if (!values.status) {
        errors.status = 'Required'
      }
   
    
    
    return errors
}

  
  export default validate