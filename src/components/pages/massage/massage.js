import React, { Component } from 'react';
import './massage.css';
import MassageListItem from "../massage-list-item/massage-list-item";
import back from './spina.png';
import honey from  './honey.png';
import kid from './kid.png';
import full from './full.png';
import kneading from './kneading-massage.png';
import relax from './relax.png';
import { withBlogService } from "../../hoc/with-blog-service";
import Loader from "../../loader/loader";

class Massage extends Component{
    state = {
        massageListReady: false,
        priceList: []
    };
    componentDidMount() {
        this.props.blogService.getPriceList()
            .then(value => {
                this.setState({
                    massageListReady: true,
                    priceList: value
                })
            })
    }

    render() {
        const imgList = [back, full, relax, kneading, honey, kid];
        const { massageListReady, priceList } = this.state;
        const price = priceList.map(({text, title, price}, index) => {
            return <MassageListItem text={text} title={title} price={price} srcImg={imgList[index]} key={index} index={index} />;
        });

        return (
            <main className='massage'>
                <div className='quote2'>
                    <p className='quote2_text'>Массажисты как музыканты, изучившие одни и те же ноты, но создающие абсолютно разную музыку.
                        Один напишет джаз, второй напишет классику, а третий создаст что-то совершенно новое.</p>
                    <p className='quote2_text'>Мастер массажа Габриель Аскуль</p>
                </div>
                <p className='massage_title'>Массаж</p>
                <div className='massage_list'>
                    { !massageListReady && <Loader/>}
                    { massageListReady && price }
                </div>
            </main>
        );
    }
}

export default withBlogService()(Massage);
