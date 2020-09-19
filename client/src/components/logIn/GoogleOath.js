import React, { Component } from 'react';
import {signIn,signOut} from '../../Actions';
import {connect} from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';


class OathClient extends Component {
      onAuthChange=(isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getBasicProfile(),this.auth);
            


        }else{
            this.props.signOut();
        }
        
    }
   
                render() {

                    window.gapi.load('client:auth2', () => {
                        window.gapi.client.init({
                            client_id: '868514593522-2v3tminrpb11m0n7nc6v7lalsafcvbnr.apps.googleusercontent.com',
                            scope: 'profile email'
            
                        }).then(() => {
                            this.auth = window.gapi.auth2.getAuthInstance();
                            this.onAuthChange(this.auth.isSignedIn.get());
                            this.auth.isSignedIn.listen(this.onAuthChange);
                            if(this.auth.isSignedIn.get()){

                               this.auth.signOut().then((re)=>{
                                this.props.history.push('/')
                                   
                               })


                            }else{
                            this.auth.signIn().then((er)=>{
                                this.props.history.push('/dashbord')

                            })
                            

                            }
                             
                  
                        })
                    })
                
              
                 

                    return (
                       
                        <div style={{display:'block',textAlign:'center',padding:'5rem'}}>
                        <CircularProgress color="secondary" />
                      </div>
                    );
                }
          

        }
export default connect(null,{
    signIn,
    signOut

})(OathClient);

