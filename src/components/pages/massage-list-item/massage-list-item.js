import React from 'react';
import './massage-list-item.css'

const MassageListItem = ({srcImg, title, text, price, index})=> {

  return (
      <div className='list_item'>
          <img className='list_item_img' src={srcImg} alt={title}/>
          <div className='list_item_subs'>
              <h3 className='list_item_title'>{title}</h3>
              <p className='list_item_text'>{text}</p>
              <h4 className='list_item_price'>{price}</h4>
          </div>
      </div>
  );
};

export default MassageListItem;
