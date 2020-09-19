import React,{Component} from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import {MenuRounded,CancelRounded} from '@material-ui/icons';
import {Divider} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';



class Example extends Component {
  logOut=()=>{
    if(this.props.auth.isSignedIn){
      this.props.auth.auth1.signOut();
    }

  }

  render() {
    // console.log('this.props.auth.isSignedIn '+this.props.auth.isSignedIn);
    // if(this.props.auth.isSignedIn){
    //   return <Redirect to={'/dashbord'} />
    // } 
    
 
    return (
      <ResponsiveMenu
        menuOpenButton={<MenuRounded className='button'/>}
        menuCloseButton={<CancelRounded className='button'/>}
        changeMenuOn="900px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <div className='menuList'>
                  <Link className='menuList__menuItem' style={{ textDecoration:'none',color:'white'}} to='/'>Home</Link>
                  <Divider className='divider'/>
                  <Link className='menuList__menuItem' to='/dashbord'>Dashbord</Link>
                  <Divider className='divider'/>

                  <Link className='menuList__menuItem' to='/publicstories'>PublicStories</Link>
                  <Divider className='divider'/>

                  <Link className='menuList__menuItem imageContainer'  onClick={this.logOut} to='/login'>
                    <div>{this.props.auth.isSignedIn ?'Logout':'logIn with google' } </div>
                    { this.props.auth.isSignedIn && <img src={this.props.auth.profile.getImageUrl()} alt='' />}
                    
                   
                    </Link>
                  <Divider className='divider'/>
                  <Link className='menuList__menuItem' to='/forDevelopers'>ForDevelopers</Link>
                  <Divider className='divider'/>





            
          </div>
        }
      />
    );
  }
}




const mapStateToPros=(state)=>{
  return {auth:state.auth}
}          

export default connect(mapStateToPros)(Example);