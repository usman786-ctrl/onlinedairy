const reducer = (state = [], action) => {
    switch (action.type) {
      case 'PUBLIC_DATA':
        return action.payload
      default:
        return state;
    }
  };
  
  
  
  export default reducer;
  