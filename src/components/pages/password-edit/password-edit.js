import React, { Component } from 'react';
import './password-edit.css';
import { withBlogService } from "../../hoc/with-blog-service";
import { connect } from 'react-redux';
import { passAdd } from "../../../actions";

class PasswordEdit extends Component {
    state = {
        pswMatchError: false
    };

    onSubmit = (e) => {
        e.preventDefault();
        const psw = e.target.psw.value;
        const pswConfirm = e.target.pswConfirm.value;
        if (psw !== pswConfirm) {
            this.setState({ pswMatchError: true});
        } else {
            this.setState({ pswMatchError: false});
            this.props.blogService.editPassword({
                pass: this.props.pass,
                newPass: psw
            }).then(value => {
                if (value.ok) {
                    this.props.passAdd(null);
                }
            });
        }
    };

    render() {
        const { pswMatchError } = this.state;
        const pswError = <p className='psw_error'>Пароли не совпали</p>

        return (
            <form className='psw_edit_form' onSubmit={this.onSubmit} >
                <input className='psw_edit_input' name='psw' placeholder='введите новый пароль' type="password"/>
                <input className='psw_edit_input' name='pswConfirm' placeholder='повторите пароль' type="password"/>
                <input className='psw_edit_btn' type="submit" value='Изменить пароль'/>
                { pswMatchError && pswError }
            </form>
        );
    }
}

const mapDispatchToProps = {
    passAdd
};

const mapStateToProps = ({ pass }) => {
  return { pass };
};

export default withBlogService()(
    connect(mapStateToProps,
        mapDispatchToProps)(PasswordEdit)
);
