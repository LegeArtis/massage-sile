import React from 'react';
import './app-header.css';
import viberIcon from "./icon_viber.svg";
import phoneIcon from "./icon_phone.png";
import burger from "./icon_burgermenu.svg"
import Menu from "../menu/menu";



const AppHeader = ({goodToKnow}) => {
    const isMobile = window.innerWidth < 1024;
    let isOpen = false;
    return (
        <main id='top' className='app_header'>
            { isMobile ? <img className='burger' alt='Menu' onClick={() => { isOpen = !isOpen; console.log(isOpen);}} src={burger} /> :
                <Menu goodToKnow={goodToKnow} /> }
            { isOpen ?  <Menu goodToKnow={goodToKnow} /> : null }
            { isOpen && <h1 className='phone_icon' >Heyyyy</h1>}
            <div className='viber_phone'>
                <img className='phone_icon' src={viberIcon} alt='Viber'/>
                <a href="tel:+380509596219" className='phone_number'>+38(050) 95-96-219</a>
            </div>
            <div className='mobile_phone'>
                <img className='phone_icon' src={phoneIcon} alt='Mobile'/>
                <a href="tel:+380687944094" className='phone_number'>+38(068) 79-44-094</a>
            </div>
        </main>
    );
};

export default AppHeader;
