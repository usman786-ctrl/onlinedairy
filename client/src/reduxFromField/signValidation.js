const validate = values => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'Required'
    }
 
    if (!values.password) {
      errors.password = 'Required'
    }
   
  

    return errors
  
}
  
  export default validate