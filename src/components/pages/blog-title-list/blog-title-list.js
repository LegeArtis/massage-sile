import React, { Component } from 'react';
import './blog-title-list.css';
import { withBlogService } from '../../hoc/with-blog-service';
import { connect } from 'react-redux';
import Loader from "../../loader/loader";

class BlogTitleList extends Component{
    state = {
        blogList: undefined
    };

    componentDidMount() {
        this.props.blogService.getBlogs()
            .then((data) => {
               this.setState({ blogList: data });
            });
    }

    removeBlog = (e) => {
        const {blogList} = this.state;
        const index = blogList.findIndex(value => value._id === e.target.id);
        this.props.blogService.removeBlog({ id: e.target.id, pass: this.props.pass })
            .then(value => {
                if (value.ok) {
                    this.setState({
                        blogList: [...blogList.splice(0,index), ...blogList.splice(index +1)]
                    });
                }
            });
    };

    render() {
        const { blogList } = this.state;
        if ( blogList === undefined ) {
            return <Loader/>
        }

        const blogListView = blogList.map(({ title, _id}) => {
           return (
               <li className='li_blog_list_title' key={_id}>
                   <h3 className='h3_blog_list_title'>{title}</h3>
                   <button className='button_blog_list_title' id={_id} onClick={this.removeBlog}>X</button>
               </li>
           );
        });

        return (
            <ul className='ul_blog_list_title'>
                {blogListView}
            </ul>
        );
    }
}

const mapStateToProps = ({ pass }) => {
    return { pass };
};

export default connect(mapStateToProps)(
    withBlogService()(BlogTitleList)
);
