import React, { Component } from 'react';
import './blog-add.css';
import BlogItem from "../blog-item/blog-item";
import { withBlogService } from "../../hoc/with-blog-service";
import { connect } from 'react-redux';

class BlogAdd extends Component {
    state = {
        title: '',
        text: '',
        img: '',
        file: '',
        errorAdd: false
    };

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                img: reader.result
            });
        };

        reader.readAsDataURL(file);
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { title, text, file } = this.state;
        const { blogService, pass } = this.props;
        const formData = new FormData();
        formData.append('blogImg', file);
        blogService.addBlog({ formData, pass })
            .then((value => {
                if (value.ok) {
                   blogService.addBlogDesk({ title, text, pass }).then(value1 => {
                       document.getElementById('imgFile').value = '';
                        this.setState({
                            title: '',
                            text: '',
                            img: '',
                            file: '',
                            errorAdd: false
                        });
                    }).catch(()=>{
                        this.setState({
                            errorAdd: true
                        });
                    })
                }
            })).catch(()=>{
            this.setState({
                errorAdd: true
            });
        });


    };

    render() {
        const { title, text, img } = this.state;

        return (
                <div className='add_blog_block'>
                    <form onSubmit={this.onSubmit}>
                        <input className='add_input' onChange={this.onChange} name='title'
                               value={title} placeholder='Название блога' type="text" required/>
                        <input className='add_input' id='imgFile' type="file" name='blogImg'
                               accept='image/*' onChange={this.handleImageChange} required/>
                        <textarea className='add_textarea' name='text' onChange={this.onChange} value={text}
                                  placeholder="Текст статьи" required/>
                        <input className='add_input add_button' type='submit' value='Загрузить' />
                    </form>
                    <div className='add_blog_preview'>
                        <BlogItem srcImg={img} text={text} title={title} />
                    </div>
                </div>
        );
    }
}

const mapStateToProps = ({ pass }) => {
  return { pass };
};

export default connect(mapStateToProps)(
    withBlogService()(BlogAdd)
);
