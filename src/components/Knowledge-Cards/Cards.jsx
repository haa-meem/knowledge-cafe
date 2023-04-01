import React, { useEffect, useState } from 'react';
import Article from '../Articles/Article';
import Bookmark from '../Bookmark/Bookmark';
import './Cards.css'
const Cards = () => {
    const [cards, setCards] = useState([]);
    const [bookmark,setBookmark]=useState([])
    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);

    const handleAddToBookmark=(article)=>{
        const newBookmark=[...bookmark,article];
        setBookmark(newBookmark);
    }

    return (
        <div className="knowledge-container">
            <div className="cards-container">
                {
                    cards.map(article => <Article
                        key={article.id}
                        article={article}
                        handleAddToBookmark={handleAddToBookmark}
                    ></Article>)
                }
            </div>
            <div className="bookmarks-container">
                <Bookmark bookmark={bookmark}></Bookmark>
            </div>
        </div>
    );
};

export default Cards;