import React from 'react';
import './button-derected.css';

const ButtonDirected = ({ text, direct, toggleBlock, nameBlock }) => {
    return (
        <button className='secret_page_button' id={nameBlock} onClick={toggleBlock}>
            <div id={nameBlock} className={ direct ? 'button_dir_true' : 'button_dir_false'}>
                >
            </div>
            <p id={nameBlock} className='button_text'>
                {text}
            </p>
        </button>
    );
};

export default ButtonDirected;
