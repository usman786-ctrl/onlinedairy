import React,{Component} from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import {MenuRounded,CancelRounded} from '@material-ui/icons';
import {Divider} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Avatar} from '@material-ui/core';



class Example extends Component {
  logOut=()=>{
    if(this.props.auth.isSignedIn){
      this.props.auth.auth1.signOut();
    }

  }


  handleMenuItemClicked=()=> {
    this.menuObj.handleClick();
  }

  render() {
   
 
    return (
      <ResponsiveMenu
        menuOpenButton={<MenuRounded className='button'/>}
        menuCloseButton={<CancelRounded className='button'/>}
        changeMenuOn="900px"
        ref={menu=> this.menuObj = menu}
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <div className='menuList' onClick={this.handleMenuItemClicked}>
                  <Link className='menuList__menuItem' style={{ textDecoration:'none',color:'white'}} to='/'>Home</Link>
                  <Divider className='divider'/>
                  <Link className='menuList__menuItem' to='/dashbord'>Dashbord</Link>
                  <Divider className='divider'/>

                  <Link className='menuList__menuItem' to='/publicstories'>PublicStories</Link>
                  <Divider className='divider'/>

                  <Link className='menuList__menuItem imageContainer'  onClick={this.logOut} to='/login'>
                    <div>{this.props.auth.isSignedIn ?'Logout':'logIn with google' } </div>
                    { this.props.auth.isSignedIn &&  <Avatar style={{marginLeft:'1rem'}} alt="Remy Sharp" src={this.props.auth.profile.getImageUrl()?this.props.auth.profile.getImageUrl():null} />}
               
                    
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