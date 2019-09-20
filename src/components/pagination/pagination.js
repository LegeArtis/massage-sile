import React from 'react';
import './pagination.css';

const Pagination = ({maxPages, currentPage, clickNext, clickBack, clickGoTo})=> {


    return (
        <div className='pagination'>
            { currentPage > 1 && <button className='pagination_button' onClick={clickBack}> пред. </button>}
            { currentPage > 3 && <button className='pagination_button' id='1' onClick={clickGoTo}> 1 </button>}
            { currentPage > 3 && <span>...</span>}
            { currentPage > 2 && <button className='pagination_button' id={currentPage-2} onClick={clickGoTo}> {currentPage-2} </button>}
            { currentPage > 1 && <button className='pagination_button' id={currentPage-1} onClick={clickGoTo}> {currentPage-1} </button>}
            <p className='pagination_current'>{currentPage}</p>
            { currentPage < maxPages && <button className='pagination_button' id={currentPage+1} onClick={clickGoTo}> {currentPage+1} </button>}
            { currentPage < maxPages -1 && <button className='pagination_button' id={currentPage+2} onClick={clickGoTo}> {currentPage+2} </button>}
            { currentPage < maxPages -2 && <span>...</span>}
            { currentPage < maxPages -3 && <button className='pagination_button' id={maxPages} onClick={clickGoTo}> {maxPages} </button>}
            { currentPage < maxPages && <button className='pagination_button' onClick={clickNext}> след. </button>}
        </div>
    );

};

export default Pagination;
