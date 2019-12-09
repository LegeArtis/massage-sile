import React, { Component } from 'react';
import './secret-page.css';
import  { connect } from 'react-redux';
import BlogAdd from "../blog-add/blog-add";
import ButtonDirected from "../button-directed/button-derected";
import BlogTitleList from "../blog-title-list/blog-title-list";
import { withBlogService } from "../../hoc/with-blog-service";
import { passAdd } from "../../../actions";
import PriceTitleList from "../price-title-list/price-title-list";
import PasswordEdit from "../password-edit/password-edit";

class SecretPage extends Component {
    state = {
         addBlock: false,
         listBlock: false,
         passError: false,
         priceEditor: false,
         passwordEditor: false
    };

    toggleBlock = (e) => {
        const blockName = e.target.id;
        this.setState( (state) => {
           return ({
               [blockName]: !state[blockName]
           });

        });
    };

    logIn = (e) => {
        e.preventDefault();
        const { value: pass } = e.target.password;
        this.props.blogService.checkPassword(pass)
            .then(value => {
               value.json().then(data => {
                   if (data.ok) {
                       this.props.passAdd(pass);
                       this.setState({ passError: false});
                   } else  {
                       this.setState({ passError: true });
                   }
               })
            }).catch(reason => {
                console.log('password rejected');
        });
    };

    render() {
        const { addBlock, listBlock, passError, priceEditor, passwordEditor } = this.state;
        const { pass } = this.props;
        const error = <h5 className='psw_error'>Не верный пароль!</h5>;

        if ( pass ) {
            return (
                <div className='secret_page_block'>
                    <ButtonDirected nameBlock='addBlock' text='Добавить блог' direct={addBlock} toggleBlock={this.toggleBlock} />
                    { addBlock && <BlogAdd /> }
                    <ButtonDirected nameBlock='listBlock' text='Список блогов' direct={listBlock} toggleBlock={this.toggleBlock} />
                    { listBlock && <BlogTitleList /> }
                    <ButtonDirected nameBlock='priceEditor' text='Редактирование цен' direct={priceEditor} toggleBlock={this.toggleBlock} />
                    { priceEditor && <PriceTitleList />}
                    <ButtonDirected nameBlock='passwordEditor' text='Изменить пароль' direct={passwordEditor} toggleBlock={this.toggleBlock} />
                    { passwordEditor && <PasswordEdit /> }
                </div>
            );
        }

        return (
            <form onSubmit={this.logIn} className='black_screen'>
                <input className='psw' name={'password'} type="password"/>
                <button type='submit' className='psw_btn'>Войти</button>
                { passError && error}
            </form>
        );
    }
}

const mapStateToProps = ({ pass }) => {
    return { pass };
};

const mapDispatchToProps = {
    passAdd
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withBlogService()(SecretPage)
);
