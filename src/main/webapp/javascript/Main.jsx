import React, { Component } from "react";
import ReactDOM from 'react-dom';
import BookList from './BookList';
import '../css/Main.css';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks() {
        fetch("/api/books")
            .then(res => res.json())
            .then(
                (response) => {
                    this.setState({
                        books: response
                    });
                },
                (error) => {
                    alert(error);
                }
            )
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const serialized = {};
	    var formData = new FormData(evt.target);
	    for (var key of formData.keys()) {
		    serialized[key] = formData.get(key);
	    }

        fetch("/api/books", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(serialized)
        }).then((response) => {
                if (response.ok) {
                    this.fetchBooks();
                } else {
                    alert("Failed to create book");
                }
            }
        ).catch((error) => {
            alert(error);
        });
        evt.target.reset();
        return false;
    }

    render() {
        return (
            <div id="main">
                <h1>My Books</h1>
                <BookList books={this.state.books}/>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input id="title" name="title" type="text" placeholder="Enter title"/>
                    <input id="author" name="author" type="text" placeholder="Enter author"/>
                    <button type='submit'>Create</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('react-mountpoint')
);