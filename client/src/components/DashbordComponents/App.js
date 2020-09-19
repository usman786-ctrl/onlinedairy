import React, { Component } from 'react';
import UserStories from './UserStories';
import {Paper,Button} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import {Add} from '@material-ui/icons';
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";
import {dashbordstories,createStory} from '../../Actions';


class App extends Component {

  



  
  

  
  

 

  state={story:false,abc:true}

  handlestoryClick=()=>{

      this.setState({story:true})
    

  }
      
    
    render(){
      if(this.props.auth.isSignedIn && this.state.abc){

        const obj =  this.props.auth.profile;
        const data=obj.getName()+' '+obj.getId();
        this.props.dashbordstories(data);
        this.setState({abc:false})


      }



      
      



      if(this.state.story){
        return <Redirect to={'/story'} />

      }

      if(!this.props.auth.isSignedIn){
        return <div className='notStoryText'>Kindly logIn with google to create stories</div>
      } 

      


     return this.props.userData.length!==0?  (
          
          
            <div style={{position:'relative'}}>

              <div className='userName'>welcom {this.props.auth.isSignedIn ? this.props.auth.profile.getName():null}</div>
              <Fab color="primary" aria-label="add" onClick={this.handlestoryClick} className="newStroyButton">
              <Add />
            </Fab>

            <div className='story-header' >
              <span>sr</span>
              <span>title</span>
              <span>status</span>
              <span>comments</span>
              <span></span>

            </div>
            <div className='storyreaper'> 

            {

this.props.userData.map((userData1,index)=>{

      return  <UserStories
                key={userData1._id}
                title={userData1.title}
                status={userData1.status}
                comments={userData1.comments}
                date={userData1.date}
                body={userData1.body}
                id={userData1._id}

                sr={index+1}
                 />

    
          

            
            })

          }
          </div>
             </div>
        ):
        <div>
           <Fab color="primary" aria-label="add" onClick={this.handlestoryClick} className="newStroyButton">
              <Add />
            </Fab>
        <div className='notStoryText'>No Story Found Click on plus button to create new Story</div>

        </div>
    }
}

const mapStateToPros=(state)=>{
  return {auth:state.auth,userData:state.DashbordData}
}  

export default connect(mapStateToPros,{dashbordstories})(App);



