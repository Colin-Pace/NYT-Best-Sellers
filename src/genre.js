import React from "react";
import makeCards from "./makeCards.js";

export default class Genre extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: undefined
        }
    }

    render() {
        const books = this.props.books;
        const cards = makeCards(books, "forGenreCard");
        
        return (
            <div>
                <h2 className = "genreTitle">{this.props.genre}</h2>
                <div id = "genreCards">
                    {cards}
                </div>
            </div>
        )
    }
}