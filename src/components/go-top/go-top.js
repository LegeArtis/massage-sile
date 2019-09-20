import React from 'react';
import './go-top.css';
import goTopIcon from './icon_ arrow to up.png'
import { HashLink } from "react-router-hash-link";

const GoTop = ()=> {
    return (
        <HashLink to='/#top'>
            <img className='go_top' src={goTopIcon} alt='goTop' />
        </HashLink>
    );
};

export default GoTop;
