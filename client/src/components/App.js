import React, { Component } from 'react';
import Footer from './homepagecomponents/footer/Footer';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './homepagecomponents/header/Header';
import NavBar from './homepagecomponents/navbar/Navbar';
import Features from './homepagecomponents/Features/Features';
import signup from './logIn/GoogleOath';
import {connect} from 'react-redux';
import StoryGenerater from './storyGenerater/StoryGenerater';
import {signIn,signOut} from '../Actions';
import PublicStories from '../components/publicStories/App';
import DashBord from './DashbordComponents/App';

import "../sass/main.scss";

class App extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                client_id: '868514593522-gl76qmghe9e17qa2cp1lb2oq1da227co.apps.googleusercontent.com',
                scope: 'profile email'

            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }
    onAuthChange=(isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getBasicProfile(),this.auth);
     
            


        }else{
            this.props.signOut();
        }
        
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                 <NavBar/>
                 <Route path='/' exact component={Header} />
                 <Route path='/logIn' exact component={signup} />
                 <Route path='/story' exact component={StoryGenerater} />
                 <Route path='/publicstories' exact component={PublicStories} />



                 <Route path='/' exact component={Features} />
                 <Route path='/dashbord' component={DashBord} />
                 
                 <Footer/>
              </BrowserRouter>
            
            </div>
        );
    }
}



export default connect(null,{
    signIn,
    signOut

})(App);

