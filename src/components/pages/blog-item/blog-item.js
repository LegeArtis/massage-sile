import React from 'react';
import './blog-item.css'
import {Link} from "react-router-dom";

const BlogItem = ({srcImg, title, text, itemId, index})=> {
    let mainText = text.length > 200 ? text.slice(0, 199) + '...' : text;
    const column = index < 3 ? index + 1 : index - 2;
    const row = index < 3 ? 1 : 2;
    const styleIE = {
        '-ms-grid-column': `${column}`,
        '-ms-grid-row': `${row}`,
        display: 'block'
    };
    return (
        <div className='blog_item' style={styleIE}>
            {srcImg && <img className='blog_item_img' src={srcImg} alt='.'/> }
            <div className='blog_item_subs'>
                <h3 className='blog_item_title'>{title}</h3>
                <p className='blog_item_text'>{mainText}</p>
                { itemId &&
                <Link to={`/good-to-know/${itemId}`}>
                    <h4 className='blog_item_read'>читать ></h4>
                </Link>
                }
            </div>
        </div>
    );
};

export default BlogItem;
