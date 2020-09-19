const validate = values => {
    console.log('validation doen');
    const errors = {}
    if (!values.firstName) {
        console.log('if');
      errors.firstName = 'Required'
    }
 
    if (!values.password) {
      errors.password = 'Required'
    }
   
    if (!values.conformPassword) {
      errors.conformPassword = 'Required'
    }
    if(values.password && values.conformPassword){
        if(values.conformPassword!==values.password){
      errors.conformPassword = 'password are not same'


        }
    }


    return errors
  
}
  
  export default validate