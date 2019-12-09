import React, { Component } from 'react';
import './opened-article.css';
import exitIcon from "../certificates-list/icon_exit.png";
import {Link} from "react-router-dom";
import { withBlogService } from "../../hoc/with-blog-service";
import Loader from "../../loader/loader";

class OpenedArticle extends Component{
    state = {
      articles: undefined
    };

    componentDidMount() {
        this.props.blogService.getBlogs()
            .then((list) => {
                this.setState({
                    articles: list
                });
            });
    }

    render() {
        const { closeArticle} = this.props;
        const { articles } = this.state;


        if (articles === undefined) {
            return <Loader />
        }
        const index = articles.findIndex(value => value._id === this.props.id);
        const { title, imgUrl, text } = articles[index];

        const prev =  index > 0 ?
            <Link to={`/good-to-know/${articles[index - 1]._id}`}>
             <p className= 'prev article_pointer' > ←предыдущая</p>
            </Link> :
            <p className='prev article_inactive'>←предыдущая</p>;

        const next = index < articles.length - 1 ?
            <Link to={`/good-to-know/${articles[index + 1]._id}`}>
                <p className= 'article_pointer' > следующая →</p>
            </Link> :
            <p className='article_inactive'>следующая →</p>;

        return(
            <div className='article_block'>
                { !articles && <Loader />}
                <div className='main_content_article'>
                    <Link to='/good-to-know'>
                        <img className='close_article' src={exitIcon} onClick={closeArticle} alt='Exit' />
                    </Link>
                    <div className='article_header'>
                        <div className='article_title_block'>
                            <div className='navigation'>
                               {prev}
                               {next}
                            </div>
                            <h2 className='article_title'>{title}</h2>
                        </div>
                        <img className='article_img' src={imgUrl} alt="Article img"/>
                    </div>
                    <p className='article_text'>{text}</p>
                </div>
            </div>
        );
    }
}

export default withBlogService()(OpenedArticle);
