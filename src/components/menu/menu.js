import React, { Component } from 'react';
import './menu.css';
import { HashLink as Link } from "react-router-hash-link";

export default class Menu extends Component{
    state = {
      dropMenu: false,
      goodToKnow: false
    };
    onHoverService = (e)=> {
        this.setState({
            dropMenu: true
        });
    };

    removeDropMenu = (e)=> {
        this.setState({
            dropMenu: false
        });
    };

    render() {
        let service;
        let goodToKnow = this.props.goodToKnow ? 'menu_item_p menu_item_p_active' :
            'menu_item_p';

        if (this.state.dropMenu){
            service = <div className='menu_item' id='service' onMouseLeave={this.removeDropMenu}>
                <p className='menu_item_p'>Услуги</p>
                <Link to='/#massage' className='menu_item_p'>Массаж</Link>
                <Link to='/#fitball' className='menu_item_p'>Фитбол</Link>
            </div>;
        } else {
            service =   <div className='menu_item' id='service'>
                <p className='menu_item_p' onMouseEnter={this.onHoverService}>
                    Услуги
                </p>
            </div>;
        }

        return (
            <div className='menu'>
                <Link to='/#about_me' className='menu_item_p'>Обо мне</Link>
                {service}
                <Link to='/good-to-know' className={goodToKnow}>Полезно знать</Link>
                <Link to='/#contact' className='menu_item_p'>Контакты</Link>
            </div>
        );
    }
}
