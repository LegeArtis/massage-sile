import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AppHeader from "./app-header/app-header";
import MainPage from "./main-page/main-page";
import GoodToKnow from "./good-to-know/good-to-know";
import Contact from "./contact/contact";
import CertificatesList from "./certificates-list/certificates-list";

export default class App extends Component{
    state = {
        underlineLink: false
    };

    underlineLink = (param)=> {
        this.setState({
            underlineLink: param
        });
    };

    render() {
        return(
            <div>
                <BrowserRouter>
                    <AppHeader goodToKnow={this.state.underlineLink}/>
                    <Route path='/good-to-know' render={()=> <GoodToKnow underline={this.underlineLink} />}/>
                    <Route path='/' exact component={MainPage} />
                    <Route path='/certificates' component={CertificatesList} />
                    <Contact />
                </BrowserRouter>
            </div>
        );
    }
}
