

export default (state=[],action)=>{

    switch (action.type) {
        case "dashbord_STORIES":

            // console.log(action.payload);
    
          return action.payload.reverse();

          default:
    
      
        return state;
    }

}