import React, { Component } from 'react';
import './about-me.css';
import ann from './ann.png';
import {Link} from "react-router-dom";

export default class AboutMe extends Component{

    render() {
        return (
            <div className='about_me'>

                <img className='ann' src={ann} alt='Ann' />
                <main id='about_me' className='about'>
                    <p className='about_me_title'>Обо мне</p>
                    <p className='about_me_text'>
                        Здравствуйте! Меня зовут Анна. Я квалифицированный массажист, инструктор оздоровительных программ.
                        Массаж это танец рук на теле человека, при котором массажист пальцами рук чувствует состояние
                        пациента. По этому в своей практике я индивидуально подхожу к человеку и использую по мере
                        необходимости различные методы: классический, медовый,  баночный массаж, микрокинезитерапию
                        (вид мануальной терапии, основанный на знаниях эмбриологии, взаимодействия мышц, позвоночника,
                        внутренних органов), массаж с использованием бамбуковых веников.
                        Приходите! Подберем то, что нужно именно вам, в данный момент!
                    </p>
                    <p className='about_me_text'>
                        Я окончила НУФВСУ, по специальности рекреация и ОФК. Имею квалификацию реабилитолога и мед.  сестра Мои сертификаты и дипломы можно посмотреть здесь ↓.
                    </p>
                    <Link to='/certificates'>
                        <button className='button_look'>
                            Посмотреть
                        </button>
                    </Link>
                </main>
            </div>
        );
    }
}
