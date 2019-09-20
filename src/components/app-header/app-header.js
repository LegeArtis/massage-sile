import React from 'react';
import './app-header.css';
import viberIcon from "./icon_viber.svg";
import phoneIcon from "./icon_phone.png";
import Menu from "../menu/menu";



const AppHeader = ({goodToKnow}) => {
    return (
        <main id='top' className='app_header'>
            <Menu goodToKnow={goodToKnow} />
            <div className='viber_phone'>
                <img className='phone_icon' src={viberIcon} alt='Viber'/>
                <p className='phone_number'>+38(050) 95-96-219</p>
            </div>
            <div className='mobile_phone'>
                <img className='phone_icon' src={phoneIcon} alt='Mobile'/>
                <p className='phone_number'>+38(068) 79-44-094</p>
            </div>
        </main>
    );
};

export default AppHeader;
