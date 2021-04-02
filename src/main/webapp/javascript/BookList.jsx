import React, { Component } from "react";

class BookList extends Component {
    render() {
        if (!this.props.books) {
            return <div>No Books yet...</div>
        }
        return (
            <ul id="book-list">
                {this.props.books.map(b => (
                    <li key={b.id}>
                        {b.title} - {b.author}
                    </li>
                ))}
            </ul>
        );
    }
}

export default BookList;