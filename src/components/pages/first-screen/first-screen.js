import React from 'react';
import './first-screen.css';
import mainPhoto from './main_photo_massage.png';
import rock from './rock.png'
import mobImg from './main_photo2.png'


const FirstScreen = () => {
    const isMobile = window.innerWidth <= 1024;
    if (isMobile) {
        return (
            <main className='first_screen_block'>
                <img className='main_photo_mobile' style={{height: window.innerHeight - 30 +'px'}} src={mobImg} alt='first screen'/>
            </main>
        )
    }
    return (
        <main className='first_screen_block'>
            <div className='rock'>
                <img className='rock_img' src={rock} alt='Rock'/>
                <p className='rock_p'>Массажист, инструктор оздоровительных программ Анна Остапенко</p>
            </div>
            <img className='main_photo' src={mainPhoto} alt='massage_photo'/>
            <p className='quote'>"Эффект массажа - естественная восстанавливающая сила организма, сила
                жизни". Гиппократ.
            </p>
        </main>
    );
};

export default FirstScreen;
