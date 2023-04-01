import React from 'react';
import './Article.css';
const Article = (props) => {
    const { id, url, person, author_name, title, publish_date, time } = props.article;
    return (
        <div className='article'>
            <img className='img' src={url} alt="" />
            <div>
                <img className='person' src={person} alt="" />
                <h3>{author_name}</h3>
                <p>{publish_date}</p>
                <p>{time}</p>
            </div>
            <h1>{title}</h1>
        </div>
    );
};

export default Article;