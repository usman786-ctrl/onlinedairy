const valsue={
    show:false
}

module.exports = (state=valsue,action)=>{
    switch (action.type) {
        case "SHOW":
            return {...state,show:true}

            case "CLOSE":
                return {...state,show:false}
                
            
    
        default:
            return valsue
    }

}