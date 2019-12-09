import React, {Component } from 'react';
import './price-title-list.css';
import { withBlogService } from '../../hoc/with-blog-service';
import { connect } from 'react-redux'
import Loader from "../../loader/loader";

class PriceTitleList extends Component {
    state = {
        priceListReady: false,
        priceList: []
    };

    componentDidMount() {
        this.props.blogService.getPriceList()
            .then(value => {
                this.setState({
                    priceListReady: true,
                    priceList: value
                });
            });
    }

    changePrice = (e) => {
        e.preventDefault();
        const { priceList } = this.state;
        const id = +e.target.newPrice.id;
        const item = {...priceList[id], price: e.target.newPrice.value};
        const list = [ ...priceList.slice(0, id), item, ...priceList.slice(id + 1)];
        e.target.newPrice.value = '';
        this.props.blogService.editPriceList({list, pass: this.props.pass})
            .then(value => {
                if (value.ok) {
                    this.setState({ priceList: list });

                }
            })
    };

    render() {
        const { priceList, priceListReady } = this.state;

        if (!priceListReady) {
            return <Loader/>;
        }

        return(
            <ul className='ul_price_title_list'>
                {priceList.map(({ title, price }, index) => {
                    return (
                        <form onSubmit={this.changePrice} className='li_price_title_list' key={index}>
                            <p className='price_list_text'>{title}</p>
                            <p className='price_list_text'>{price}</p>
                            <input className='price_list_input' id={index} name='newPrice' type="text"/>
                            <button className='price_list_button' type='submit' >Изменить</button>
                        </form>
                    );
                })}
            </ul>
        );
    }
}

const mapStateToProps = ({ pass }) => {
    return { pass }
};

export default connect(mapStateToProps)(
  withBlogService()(PriceTitleList)
);
