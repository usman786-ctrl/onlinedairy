const axios = require('axios');
const querystring = require('querystring');

export const EDID =(data)=>{
    return{
        type:'EDIT',
        payload:data
    }
}


export const signIn=(data,auth)=>(dispatch)=>{
    const list=[data,auth]
    dispatch(
        {type:'SIGN_IN',
    payload:list}
    
    )
    
    
}

export const signOut=()=>{
    return{
        type:'SIGN_OUT'
    }
}


export const createStory= async (data)=>{
  



   
    let res = await axios.post('http://localhost:5000/api/v1/createstroy', data);

}

  


export const dashbordstories= (userid)=> async (dispatch)=>{

    const result = await axios.post('http://localhost:5000/api/v1/dashbordstories',{userid});

    dispatch( {
        type:'dashbord_STORIES',
        payload:result.data

    })
    
}


export const publicStories=()=>(dispatch)=>{
    
    axios.get('http://localhost:5000/api/v1/public').then((result)=>{


      dispatch({
        type:'PUBLIC_DATA',
        payload:result.data

    })
})
  
    
}


export const editData=(data,update)=>{
    return {
        type:'EDIT_DATA',
        payload:[data,update],

    }
    
}


export const updateData= async (data)=>{

  axios.post('http://localhost:5000/api/v1/update', data).then((result)=>{
      return

  })
    
    
}

export const deleteData=(data)=>async (dispatch)=>{

    const {id,userid} = data;

    let result = await axios.post('http://localhost:5000/api/v1/delete', {id,userid});

    dispatch( {
        type:'dashbord_STORIES',
        payload:result.data

    })
      
  }