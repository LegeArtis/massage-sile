import React from 'react';
import './blog-item.css'
import {Link} from "react-router-dom";

const BlogItem = ({srcImg, title, text, openArticle, itemId})=> {
    let mainText = text.length > 200 ? text.slice(0, 199) + '...' : text;

    return (
        <div className='blog_item'>
            <img className='blog_item_img' src={srcImg} alt={title}/>
            <div className='blog_item_subs'>
                <h3 className='blog_item_title'>{title}</h3>
                <p className='blog_item_text'>{mainText}</p>
                <Link to={`/good-to-know/${itemId}`}>
                    <h4 className='blog_item_read'>читать ></h4>
                </Link>

            </div>
        </div>
    );
};

export default BlogItem;
