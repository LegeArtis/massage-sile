import React, { Component } from 'react';
import './certificates-list.css';

import photo1 from './photo1.png';
import photo2 from './photo2.png';
import photo3 from './photo3.png';
import photo4 from './photo4.png';
import photo5 from './photo5.png';
import photo6 from './photo6.png';
import photo8 from './photo8.png';
import photo9 from './photo9.png';
import photo10 from './photo10.png';
import photo11 from './photo11.png';
import photo12 from './photo12.png';
import photo13 from './photo13.png';
import photo14 from './photo14.png';
import photo15 from './photo15.png';
import exitIcon from './icon_exit.png';
import {HashLink as Link} from "react-router-hash-link";

export default class CertificatesList extends Component{
    state = {
        currentItem: 0
    };

    list = [photo1, photo2, photo3, photo4, photo5, photo6, photo8, photo9,
        photo10, photo11, photo12, photo13, photo14, photo15];

    nextPhoto = ()=> {
        if (this.state.currentItem < this.list.length - 1)
      this.setState(({currentItem}) => {
          return {
              currentItem: currentItem + 1
          };
      });
    };

    prevPhoto = ()=> {
        if ( this.state.currentItem > 0) {
            this.setState(({currentItem}) => {
                return {
                    currentItem: currentItem - 1
                };
            });
        }
    };

    render() {
        const { currentItem } = this.state;
        const prev = currentItem > 0 ? <img onClick={this.prevPhoto} className='photo_item photo_item_change' src={this.list[currentItem - 1]} alt='prev' /> : <div></div>;
        const next = currentItem < this.list.length - 1 ? <img onClick={this.nextPhoto} className='photo_item photo_item_change' src={this.list[currentItem + 1]} alt='next' /> : undefined;

        return (
            <div className='certificates_block'>
                <h1 className='certificates_counter'>{currentItem+1}/{this.list.length}</h1>

                <Link to='/#about_me'>
                    <img className='exit_button' src={exitIcon} alt='Exit' />
                </Link>
                <div className='photo_view'>
                    {prev}
                    <img className='photo_item' src={this.list[currentItem]} alt='current'/>
                    {next}
                </div>
            </div>
        );
    }
}
