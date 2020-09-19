import React, { Component } from 'react';
import PublicStories from './PublicStories';
import {connect} from 'react-redux';
import {publicStories} from '../../Actions';

class App extends Component {

  


  componentDidMount(){

    this.props.publicStories();

  
 



  }
      
    
    render(){

        return(
          <div>

          {
            this.props.userData.length!==0 ? this.props.userData.map((data,index)=>{
              const {userid,title,body}=data;
                return <PublicStories 
                name={userid.split(' ')[0]}
                title={title}
                body={body}
                image={this.props.auth.isSignedIn ?  this.props.auth.profile.getImageUrl():null}
              />
            }):<div className='notStoryText'>not Public story found</div>

          }
           </div>
          
        );
        
    }
}

const mapStateToPros=(state)=>{
  return {userData:state.PublicData,auth:state.auth}
}  

export default connect(mapStateToPros,{publicStories})(App);



