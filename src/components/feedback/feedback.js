import React, { Component } from 'react';
import './feedback.css';

export default class Feedback extends Component{

    onSubmit = (e)=> {
        e.preventDefault();
    };

    render() {
        return (
            <main className='form_block'>
                <div className='advert'>
                    <p className='advert_text'>Занятия проходят во вторник и четверг.</p>
                    <p className='advert_text'>школьники 15:30-16:20</p>
                    <p className='advert_text'>дошкольники (от 4 лет)  17:00-17:50</p>
                    <p className='advert_text'>взрослые: 19:00-20:00</p>
                    <p className='advert_text'>по адресу г. Ирпень, ул. Полтавская, 29д.</p>
                </div>
                <form className='form' onSubmit={this.onSubmit}>
                    <p className='form_title'>Остались вопросы? Задавайте!</p>
                    <input className='form_input' type='text' placeholder='Имя' required/>
                    <input className='form_input' type='text' required
                           placeholder='Удобный способ обратной связи (телефон, почта, мессенджер) '/>
                    <input className='form_input' type='text' placeholder='Вопрос' required />
                    <button className='form_button' type='submit'>Задать</button>
                </form>
            </main>
        );
    }
}
