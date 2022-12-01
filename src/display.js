import React from "react";
import Main from "./mainPage.js";
import Genre from "./genre.js";

export default class Panel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIndex: undefined,
            books: undefined,
            mainPage: true,
        }
    }

    render() {
        if (this.props.error === true) {
            return (
                <div id = "error">
                    <br/>
                    Too many requests were made: please wait a minute and then make another selection
                </div>
            )

        } else if (this.props.books !== undefined) {
            return (
                <div id = "genre">
                    <Genre
                        genre = {this.props.genre}
                        books = {this.props.books}
                    />
                </div>
            )
            
        } else {
            return (
                <div id = "main">
                    <Main
                        fiction = {this.props.fiction}
                        nonfiction = {this.props.nonfiction}
                        hardcoverFiction = {this.props.hardcoverFiction}
                        getDate = {this.props.getDate}
                    />
                </div>
            );
        }  
    }
}