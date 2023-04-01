import React from 'react';
import './Bookmark.css'
const Bookmark = ({bookmark}) => {
    let total=0;
    for(const article of bookmark){
        total=total+article.time;
    }
    return (
        <div className='bookmark'>
            <h3 className='spent'>Spent time on read : {total} min</h3>
            <h3>Bookmarked Blogs: {bookmark.length}</h3>
        </div>
    );
};

export default Bookmark;