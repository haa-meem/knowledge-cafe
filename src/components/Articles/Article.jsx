import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Article.css';
const Article = (props) => {
    const { id, url, person, author_name, title, publish_date, time } = props.article;
    const handleAddToBookmark = props.handleAddToBookmark;
    return (
        <div className='article'>
            <img className='img' src={url} alt="" />
            <div className='article-info'>
                <div>
                    <div className='author-info'>
                        <img className='person' src={person} alt="" />
                        <span>
                            <h3 className='author_name'>{author_name}</h3>
                            <p>{publish_date}</p>
                        </span>
                    </div>
                </div>
                <p className='time'>{time} min read <button onClick={() => handleAddToBookmark(props.article)}>

                    <FontAwesomeIcon icon={faBookmark} />
                </button></p>
            </div>
            <h1 className='title'>{title}</h1>
            <button onClick={() => handleAddToBookmark(props.article)}>Mark as read</button>
        </div>
    );
};

export default Article;