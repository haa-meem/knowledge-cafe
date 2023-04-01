import React from 'react';
import './Article.css';
const Article = (props) => {
    const { id, url, person, author_name, title, publish_date, time } = props.article;
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
                <p className='time'>{time} min read</p>
            </div>
            <h1 className='title'>{title}</h1>
        </div>
    );
};

export default Article;