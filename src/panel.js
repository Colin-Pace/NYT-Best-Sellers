import React from "react";

export default class Panel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rerender: "",
            firstDate: undefined,
            date: undefined,
            previousDate: undefined,
            genre: undefined
        }
        
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleFictionFormChange = this.handleFictionFormChange.bind(this);
        this.handleNonfictionFormChange = this.handleNonfictionFormChange.bind(this);
        this.handleMoreFormChange = this.handleMoreFormChange.bind(this);
        this.previousDate = this.previousDate.bind(this);
        this.nextDate = this.nextDate.bind(this);
    }

    componentDidMount() {
        const now = new Date();
        now.setDate(now.getDate() + 7);
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const lastSunday = new Date(today.setDate(today.getDate() - today.getDay()));
        this.setState({previousDate: lastSunday, date: lastSunday, firstDate: lastSunday});            
    }

    handleFictionFormChange(event) {
        const value = event.target.value;
        this.setState({genre: value});
        this.props.getDate(value, this.state.date);
    }
    
    handleNonfictionFormChange(event) {
        const value = event.target.value;
        this.setState({genre: value});
        this.props.getDate(value, this.state.date);
    }
    
    handleMoreFormChange(event) {
        const value = event.target.value;
        this.setState({genre: value});
        this.props.getDate(value, this.state.date);
    }

    previousDate(event, date) {
        event.preventDefault();

        let previousSunday = this.state.date;
        previousSunday.setDate(this.state.date.getDate() - 7);
        this.setState({date: previousSunday});
        
        if (this.state.genre === undefined) {
            this.props.getBooks(this.state.date);
        } else {
            this.props.getDate(this.state.genre, this.state.date);
        }
    }

    nextDate(event, date) {
        event.preventDefault();
        const day = this.state.date.getDate();
        const month = this.state.date.toLocaleString('default', {month: 'long' });
        const year = this.state.date.getFullYear();

        let nextSunday = this.state.date;
        nextSunday.setDate(this.state.date.getDate() + 7);


        const now = new Date();
        now.setDate(now.getDate() + 14);
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const lastSunday = new Date(today.setDate(today.getDate() - today.getDay()));

        if (nextSunday > lastSunday) {
            alert("The date is out of range");
        } else {
            this.setState({date: nextSunday});

            if (this.state.genre === undefined) {
                this.props.getBooks(this.state.date);
    
            } else {
                this.props.getDate(this.state.genre, this.state.date);
            }
        }
    }

    render() {
        const date = [];
        if (this.state.date !== undefined) {
            const day = this.state.date.getDate();
            const month = this.state.date.toLocaleString('default', {month: 'long' });
            const year = this.state.date.getFullYear();
            date.push(month, " ", day, ", ", year);
        }
        
        return (
            <div id = "panel">
                <h1 id = "title"><a id = "titleID" href = "https://colin-pace.github.io/NYT-books-application/">The New York Times Best Sellers</a></h1>
                <h2 id = "subtitle">Authoritatively ranked lists of books sold in the United States, sorted by format and genre.</h2>

                <div id = "formBar">
                    <form id = "combined-print-and-e-book-fiction" onSubmit = {this.handleFictionForm}>
                        <select value = "FICTION" onChange={this.handleFictionFormChange} autocomplete = "off">
                            <option selected value>FICTION</option>
                            <option disabled>---</option>
                            <option value="combined-print-and-e-book-fiction">Combined Print and E-Book Fiction</option>
                            <option value="hardcover-fiction">Hardcover Fiction</option>
                        </select>
                    </form>
                    <form id = "nonfiction" onSubmit = {this.handleNonfictionFormChange}>
                        <select value = "NONFICTION" onChange={this.handleNonfictionFormChange}>
                            <option selected value>NONFICTION</option>
                            <option disabled>---</option>
                            <option value="combined-print-and-e-book-nonfiction">Combined Print and E-Book Nonfiction</option>
                            <option value="paperback-nonfiction">Paperback Nonfiction</option>
                        </select>
                    </form>
                    <form onSubmit = {this.moreChange}>
                        <select id = "moreMenu" value = "MORE" onChange={this.handleMoreFormChange}>
                            <option selected value>MORE</option>
                            <option disabled>---</option>
                            <optgroup label = "CHILDREN'S">
                                <option value = "young-adult-hardcover">Young Adult Hardcover</option>
                            </optgroup>
                       
                        </select>
                    </form>
            
                    <div id = "dateNav">
                        <a id = "leftNav" href = " " onClick = {event => this.previousDate(event, date)}>&lt;</a>
                        {date}
                        <a id = "rightNav" href = " " onClick = {event => this.nextDate(event, date)}>&gt;</a>
                    </div>
                </div>
            
            </div>
        );
    }
}
  