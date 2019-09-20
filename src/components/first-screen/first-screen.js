import React from 'react';
import './first-screen.css';
import mainPhoto from './main_photo_massage.png';
import rock from './rock.png'


const FirstScreen = () => {
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
