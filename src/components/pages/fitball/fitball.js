import React from 'react';
import './fitball.css';
import kidBack from './kid-back.png';
import kidFront from './kid-front.png';

const FitBall = () => {
    return (
        <div className='fitball'>
            <div className='prize'>
                <p className='prize_title'>Скидка 10%</p>
                <p className='fitball_text'>
                    при оплате полного курса
                    любого вида массажа - 10 сеансов
                </p>
            </div>
            <div className='fitball_img_block'>
                <img className='kid_front_img' src={kidFront} alt='Kid front'/>
                <img className='kid_back_img' src={kidBack} alt='Kid back'/>
            </div>
            <main id='fitball' className='fitball_text_block'>
                <p className='fitball_title'>Фитбол</p>
                <p className='fitball_text'>
                    Любое движение приносит пользу организму. Я выбрала для себя фитбол. Фитбол - это большой мяч,
                    который используют для фитнеса с целью укрепления мышц, формирование правильной осанки, ведь
                    сидеть на нем с согнутой спиной не возможно (надо удерживать равновесие и держать спину ровно).
                    По воздействия на организм фитбол приравнивают к иппотерапии (лечение ездой на лошадях),
                    колебания мяча стимулирует работу внутренних органов, положительно влияет на нервную
                    систему, в работу включаются многие мышцы.
                </p>
                <p className='fitball_text top_indent'>
                    Занятие с фитболом нравятся детям, они проходят весело и с пользой! Фитбол для детей способствует:
                </p>
                <p className='fitball_text'>
                    - коррекции осанки
                </p>
                <p className='fitball_text'>
                    - профилактике заболеваний опорно-двигательного аппарата
                </p>
                <p className='fitball_text'>
                    - улучшению психоэмоционального состояния ребенка
                </p>
                <p className='fitball_text'>
                    - развитию координации, равновесия, гибкости, силы и выносливости
                </p>
                <p className='fitball_text'>
                    - прививает детям любовь к движению.
                </p>
                <p className='fitball_text top_indent'>
                    Приглашаю на занятия с фитболом взрослых и детей от 4 лет позаниматься на этом чудо мячике.
                </p>
                <p className='fitball_text'>
                    Если вам тоже импонирует такой вид двигательной активности присоединяйтесь! Будем двигаться вместе!
                </p>
            </main>
        </div>
    );
};

export default FitBall;
