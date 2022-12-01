import React from "react";
import './App.css';
import Panel from "./panel.js";
import Display from "./display.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLoad: true,
      apiKey: "9TBX0DGLbpnhHCfDM986bizRqoGRESJ0",
      firstDate: undefined,
      
      combinedPrintEBooKFiction: undefined,
      combinedPrintEBooKNonfiction: undefined,
      hardcoverFiction: undefined,
      error: false,
      date: undefined,
      
      books: undefined,
      genre: undefined
    }

    this.componentDidMount = this.componentDidMount.bind(this);
    this.getBooks = this.getBooks.bind(this);
    this.getDate = this.getDate.bind(this);
    this.apiFormat = this.apiFormat.bind(this);
  }

  apiFormat(date) {
    let day;
    let month;
    let year;
    let apiFormat

    if (date !== "current") {
      day = String(date.getDate());
      if (day.length === 1) {
        day = "0" + day;
      }

      month = String(date.getMonth() + 1);
      if (month.length === 1) {
        month = "0" + String(month);
      }

      year = date.getFullYear();
      apiFormat = year + "-" + month + "-" + day;
    } else {
      apiFormat = date;
    }

    return apiFormat;
  }

  getBooks(date) {
    let apiFormat;
    if (date !== "current") {
      apiFormat = this.apiFormat(date);
    } else {
      apiFormat = date;
    }

    fetch(`https://api.nytimes.com/svc/books/v3/lists/${apiFormat}/combined-print-and-e-book-fiction.json?api-key=${this.state.apiKey}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          this.setState({error: true});
          throw new Error('An error occurred');
        }
      })
      .then(data => {
          this.setState({combinedPrintEBooKFiction: data["results"]["books"]});      
      })
      .catch(error => {
        console.log(error);
      });

    fetch(`https://api.nytimes.com/svc/books/v3/lists/${apiFormat}/combined-print-and-e-book-nonfiction.json?api-key=${this.state.apiKey}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          this.setState({error: true});
          throw new Error('An error occurred');
        }
      })
      .then(data => {
        this.setState({
          combinedPrintEBooKNonfiction: data["results"]["books"],
        })
      })
      .catch(error => {
        console.log(error);
      });

    fetch(`https://api.nytimes.com/svc/books/v3/lists/${apiFormat}/hardcover-fiction.json?api-key=${this.state.apiKey}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          this.setState({error: true});
          throw new Error('An error occurred');
        }
      })
      .then(data => {
        
        this.setState({
          hardcoverFiction: data["results"]["books"],
          error: false
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  getDate(genre, date) {
    if (this.state.error === true) {
      this.setState({error: false});
    }

    if (genre === undefined) {
      genre = this.state.genre;
    }
    
    let apiFormat;
    if (date !== "current") {
      apiFormat = this.apiFormat(date);
    } else {
      apiFormat = date;
    }

    fetch(`https://api.nytimes.com/svc/books/v3/lists/${apiFormat}/${genre}.json?api-key=${this.state.apiKey}`)
      .then(response => {
        if (response.ok) {
          
          if (this.state.error === true) {
            this.setState({error: false});
          }

          return response.json();
        } else {
          this.setState({error: true});
          throw new Error('An error occurred');
        }
      })
      .then(data => {
        this.setState({
          books: data["results"]["books"], 
          genre: data["results"]["display_name"],
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    if (this.state.firstLoad === true) {
      this.setState({firstLoad: false});
      this.getBooks("current");
    }
  }

  render() {
      return (
        <div id = "app">
          <Panel
            getBooks = {this.getBooks}
            getDate = {this.getDate}
            error = {this.state.error}
            firstLoad = {this.state.firstLoad}
          />
  
          <Display
            fiction = {this.state.combinedPrintEBooKFiction}
            nonfiction = {this.state.combinedPrintEBooKNonfiction}
            hardcoverFiction = {this.state.hardcoverFiction}
  
            getDate = {this.getDate}
            
            error = {this.state.error}
            books = {this.state.books}
            genre = {this.state.genre}
          />
        </div>
      );
  }
}
