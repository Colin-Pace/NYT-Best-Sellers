import React from "react";
import makeCards from "./makeCards.js";

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: undefined
        }
    }

    getDate(event, genre) {
        event.preventDefault();
        this.props.getDate(genre, "current");
        window.scrollTo(0, 0);
    }

    render() {
        const fiction = this.props.fiction;
        const nonfiction = this.props.nonfiction;
        const hardcoverFiction = this.props.hardcoverFiction;

        const fictionCards = makeCards(fiction, "fiction");
        const nonfictionCards = makeCards(nonfiction, "nonfiction");
        const hardcoverFictionCards = makeCards(hardcoverFiction, "hardcoverFiction");
       
        return (
            <div>
                <div className = "cardContainer">
                    <h2 className = "genreTitle"><a href = "" onClick = {event => this.getDate(event, "combined-print-and-e-book-fiction")}>Combined Print and E-Book Fiction ></a></h2>
                    <div id = "fictionCards">
                        {fictionCards}
                    </div>
                </div>

                <div className = "cardContainer">
                    <h2 className = "genreTitle"><a href = "" onClick = {event => this.getDate(event, "combined-print-and-e-book-nonfiction")}>Combined Print and E-Book Nonfiction ></a></h2>
                    <div id = "nonfictionCards">
                        {nonfictionCards}
                    </div>
                </div>

                <div className = "cardContainer">
                    <h2 className = "genreTitle"><a href = "" onClick = {event => this.getDate(event, "hardcover-fiction")}>Hardcover Fiction ></a></h2>
                    <div id = "hardcoverFictionCards">
                        {hardcoverFictionCards}
                    </div>
                </div>
            </div>
        )
    }
}