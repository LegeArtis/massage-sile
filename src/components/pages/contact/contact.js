import React, { Component } from 'react';
import './contact.css';
import fBIcon from './icon_facebook.png';
import viberIcon from '../app-header/icon_viber.svg';
import phoneIcon from '../app-header/icon_phone.png';

export default class Contact extends Component{

    render() {
        return (
            <main id='contact' className='contact_block'>
                <div className='contact'>
                    <div className='contact_first'>
                        <p className='contact_title'>
                            <span className='contact_title_span'>
                                Контакты
                            </span>
                            <a href='https://www.facebook.com/profile.php?id=100014897943889' target='_blank' rel='noopener noreferrer'>
                                <img className='img_icon' src={fBIcon} alt='FB'/>
                            </a>
                        </p>
                        <div className='contact_info'>
                            <img className='contact_icon' src={viberIcon} alt='Viber'/>
                            <p className='contact_phone'>+38(050) 95-96-219</p>
                            <p className='contact_message'>Массаж делаю в г. Ирпень, принимаю у себя.</p>
                            <img className='contact_icon' src={phoneIcon} alt='Phone' />
                            <p className='contact_phone'>+38(068) 79-44-094</p>
                            <p className='contact_message'>Занятия на фитболе  г.Ирпень  ул. Полтавская, 29д</p>
                        </div>
                    </div>
                    <div className='map'>
                        <iframe className='contact_map'
                                src="https://maps.google.com/maps?width=500&amp;height=300&amp;hl=ru&amp;q=%D1%83%D0%BB.%20%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%BA%D0%B0%D1%8F%2029%D0%B4%2C%20Irpin%2C%20Ukraine+(%D0%9D%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed"
                                frameBorder="0" scrolling="no" title='map' >

                        </iframe>
                    </div>
                </div>
            </main>
        );
    }
}
