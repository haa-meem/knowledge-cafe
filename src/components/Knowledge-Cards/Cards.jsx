import React, { useEffect, useState } from 'react';
import './Cards.css'
const Cards = () => {
    const [cards,setCards]=useState([]);

    useEffect(()=>{
        fetch('knowledge.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[]);

    return (
        <div className="knowledge-container">
            <div className="cards-container">
                <h2>Knowledge Cards coming :{cards.length}</h2>
            </div>
            <div className="bookmarks-container">
                <h4>Bookmark Summary</h4>
            </div>
        </div>
    );
};

export default Cards;