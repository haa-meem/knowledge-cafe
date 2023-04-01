import React, { useEffect, useState } from 'react';
import Article from '../Articles/Article';
import './Cards.css'
const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);

    return (
        <div className="knowledge-container">
            <div className="cards-container">
                {
                    cards.map(article => <Article
                        key={article.id}
                        article={article}
                    ></Article>)
                }
            </div>
            <div className="bookmarks-container">
                <h4>Bookmark Summary</h4>
            </div>
        </div>
    );
};

export default Cards;