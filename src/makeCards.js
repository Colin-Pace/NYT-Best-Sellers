import React from "react";

function makeCards(books, genre) {
    if (books !== undefined) {
        const cards = [];
        for (let i = 0; i < 5; i++) {

            const button = [];
            const buttonDiv = <button className = "buyButton">
                                    BUY
                              
                                        <div className = "buyButtonText">
                                            <a href = {books[i].buy_links[0]["url"]}>Amazon</a>
                                            <a href = {books[i].buy_links[1]["url"]}>Apple Books</a>
                                            <a href = {books[i].buy_links[2]["url"]}>Barnes and Noble</a>
                                            <a href = {books[i].buy_links[3]["url"]}>Books-A-Million</a>
                                            <a href = {books[i].buy_links[4]["url"]}>Bookshop</a>
                                            <a href = {books[i].buy_links[5]["url"]}>IndieBound</a>
                                        </div>
                                    
                                </button>
            button.push(buttonDiv);

            if (genre === "forGenreCard") {
                if (books[i].weeks_on_list === 1) {
                    const card = <div 
                                    className = "genreCard" 
                                    key = {`${genre}_${i}`} >
                                    
                                    <div className = "genreCardContent">
                                        <div className = "rankHistoryTitle">
                                            <div className = "genreCardRank">
                                                <h4>{books[i].rank}</h4>
                                            </div>

                                            <div className = "historyTitleAuthorDescriptionButton">
                                                <h4 className = "history">NEW THIS WEEK</h4>
                                                <h3 className = "title">{books[i].title}</h3>
                                                <h4 className = "author">by {books[i].author} <span className = "authorSeparation">|</span> {books[i].publisher}</h4>
                                                <p className = "description">{books[i].description}</p>
                                                {button}
                                            </div>
                                        </div>
                                        
                                        <div className = "cardImage">
                                            <img src = {books[i].book_image} alt = "image"></img>
                                        </div>
                                    </div>

                                </div>
                    cards.push(card);             
    
                } else {
                    const card = <div 
                                    className = "genreCard" 
                                    key = {`${genre}_${i}`} >

                                    <div className = "genreCardContent">
                                        <div className = "rankHistoryTitle">
                                            <div className = "genreCardRank">
                                                <h4>{books[i].rank}</h4>
                                            </div>

                                            <div className = "historyTitleAuthorDescriptionButton">
                                                <h4 className = "history">{books[i].weeks_on_list} WEEKS ON THE LIST</h4>
                                                <h3 className = "title">{books[i].title}</h3>
                                                <h4 className = "author">by {books[i].author} <span className = "authorSeparation">|</span> {books[i].publisher}</h4>
                                                <p className = "description">{books[i].description}</p>
                                                {button}
                                            </div>
                                        </div>
                                        
                                        <div className = "cardImage">
                                            <img src = {books[i].book_image} alt = "image"></img>
                                        </div>
                                    </div>

                                </div>
                    cards.push(card);  
                }
                
            } else {

                if (books[i].weeks_on_list === 1) {
                    const card = <div 
                                    className = "card" 
                                    key = {`${genre}_${i}`} >
                                    
                                    <div className = "cardContent">
                                        <div className = "rankAndImage">
                                            <h4 className = "cardRank">{books[i].rank}</h4>
                                            <img className = "cardImage" src = {books[i].book_image} alt = "image"></img>
                                        </div>
                                        <h4 className = "history">NEW THIS WEEK</h4>
                                        <h3 className = "title">{books[i].title}</h3>
                                        <div className = "authorButton">
                                            <h4 className = "author">by {books[i].author}</h4>
                                            <div className = "button">
                                                {button}
                                            </div>
                                        </div>
                                    </div>
                         
                                 </div>
                    cards.push(card);             
    
                } else {
                    const card = <div 
                                    className = "card" 
                                    key = {`${genre}_${i}`}>
    
                                    <div className = "cardContent">
                                        <div className = "rankAndImage">
                                            <h4 className = "cardRank">{books[i].rank}</h4>
                                            <img className = "cardImage" src = {books[i].book_image} alt = "image"></img>
                                        </div>
                                        <h4 className = "history">{books[i].weeks_on_list} WEEKS ON THE LIST</h4>
                                        <h4 className = "title">{books[i].title}</h4>
                                        <div className = "authorButton">
                                            <h4 className = "author">by {books[i].author}</h4>
                                            <div className = "button">
                                                {button}
                                            </div>
                                        </div>
                                    </div>
                                    
                                 </div>
                    cards.push(card);
                }   
            }
        }

        return cards;
    }
}

export default makeCards;