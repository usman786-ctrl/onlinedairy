const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_DATA':
      return {
        data: action.payload[0],update:action.payload[1],
      };
    default:
      return state;
  }
};



export default reducer;
