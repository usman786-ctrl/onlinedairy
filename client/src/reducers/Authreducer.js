
const INITIAL_STSTE={
    isSignedIn:null,
    profile:null,
    auth1:null
}

export default (state=INITIAL_STSTE,action)=>{

    switch (action.type) {
        case "SIGN_IN":
            
           const b={...state,isSignedIn:true,profile:action.payload[0],auth1:action.payload[1]}
          return b;
    
       case 'SIGN_OUT':

            return {...state,isSignedIn:false, profile:null,auth1:null}

        default:
        return state;
    }

}