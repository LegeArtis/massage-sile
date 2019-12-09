import React, { Component } from 'react';
import './feedback.css';
import  { withBlogService } from "../../hoc/with-blog-service";

class Feedback extends Component{
    state = {
        send: false,
        userName: '',
        userCallback: '',
        userMessage: ''
    };

    onSubmit = (e)=> {
        e.preventDefault();
        const send = {
            name: e.target.userName.value,
            callback: e.target.userCallback.value,
            message: e.target.userMessage.value
        };

        this.props.blogService.sendMail(send)
        .then(value => {
            if (value.ok) {
                this.setState({
                    send: true,
                    userName: '',
                    userCallback: '',
                    userMessage: ''
                });
                setTimeout(()=>{
                    this.setState({
                        send: false
                    });
                }, 5000)
            }
        }).catch(reason => console.error(reason));
    };

    onChange = (e)=> {
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    render() {
        const { userName, send, userMessage, userCallback } = this.state;
        const buttonText = send ? 'Отпраленно' : 'Задать';
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
                    <input className='form_input' type='text' value={userName} onChange={this.onChange}
                           name='userName' placeholder='Имя' autoComplete={'off'} required/>
                    <input className='form_input' type='text' value={userCallback}
                           onChange={this.onChange} name='userCallback' autoComplete={'off'} required
                           placeholder='Удобный способ обратной связи (телефон, почта, мессенджер) '/>
                    <input className='form_input' type='text' value={userMessage} onChange={this.onChange}
                           name='userMessage' placeholder='Вопрос' autoComplete={'off'} required />
                    <button className='form_button' type='submit'>{buttonText}</button>
                </form>
            </main>
        );
    }
}

export default withBlogService()(Feedback);
