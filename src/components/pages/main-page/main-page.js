import React, { Component } from 'react';
import AboutMe from "../about-me/about-me";
import Massage from "../massage/massage";
import FitBall from "../fitball/fitball";
import GoTop from "../go-top/go-top";
import FirstScreen from "../first-screen/first-screen";
import Feedback from "../feedback/feedback";
import './main-page.css'

export default class MainPage extends Component{
    state = {
        goUp: false,
        canSee: false
    };

    buttonClick = ()=> {
        this.setState(({canSee}) =>{
            return {
                canSee: !canSee
            };
        })
    };

    scrolling = () => {
        if (window.scrollY > 600 && this.state.goUp === false) {
            this.setState({
                goUp: true
            });
        }
        if (window.scrollY < 600 && this.state.goUp === true) {
            this.setState({
                goUp: false
            });
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.scrolling);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrolling);
    }


    render() {
        return(
            <div className='main_div' onScroll={this.scrolling}>
                {this.state.goUp ? <GoTop /> : undefined}
                <FirstScreen />
                <AboutMe buttonClick={this.buttonClick}/>
                <Massage/>
                <FitBall/>
                <Feedback />
            </div>
        );
    }
}
