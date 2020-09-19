import React, { Component } from 'react';
import {Divider,Button} from '@material-ui/core';
import {connect} from 'react-redux';
import {editData,deleteData} from '../../Actions';
import {Redirect} from 'react-router-dom';

class UserStories extends Component {

        state={av:false};
     handelEditClick=()=>{
        this.props.editData(this.props,'update')
        this.setState({av:true})
      

    }

    handelDeleteClick=()=>{

        const obj =  this.props.auth.profile;
           const userid=obj.getName()+' '+obj.getId();

        //    console.log(this.props.id,userid);
           const id= this.props.id
        const mlk={id,userid};
        this.props.deleteData(mlk)
      

    }



  
    
    render() {
        if(this.state.av){
            return <Redirect to ='/story'/>
        }
      
       

        const {status,title,comments,date,sr}= this.props;
        


      
             return (
             <div className='storyData-reaper' >
        <div className="storydata">
             <h6  className="storydata--srl">{sr}</h6>
            <div  className="storydata--title">
                 <h3>
                 {title}
                 </h3>
                 
                 </div>
             <h6  className="storydata--status">{status}</h6>
             <h6  className="storydata--comment">{comments ? 'allow':'not Allowed'}</h6>



             <Button
                  variant='contained'
                  color='primary'
                  onClick={this.handelEditClick}
                
                  size='large'
                >Edit</Button>

                <Button
                variant='contained'
                color='secondary'
                size='large'
                onClick={this.handelDeleteClick}
                >Delete</Button>

                </div>
                
                <Divider style={{margin:'1rem 0'}}/>
                
            </div>
        );
    }
}

const mapStateToPros=(state)=>{
    return {auth:state.auth}
  }  
  
  export default connect(mapStateToPros,{editData,deleteData})(UserStories);
  