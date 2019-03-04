import React, { Component } from 'react';
import  { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';


class BookDetails extends Component {

    getSelectedBookDetails() {
        const { book } = this.props.data;
        if(book){
            return (
                <div>
                    <h2>Book Name:{book.name}</h2>
                    <p>Genre:{book.genre}</p>
                    <p>Author:{book.author.name}</p>
                    <p>All books by this Author:</p>
                    <ul className="other-books">
                        { book.author.books.map(item => {
                            return <li key={item.name}>{item.name}</li>
                        })}
                    </ul>
                </div>
            )
        }else{
            return <p>No Book Selected</p>
        }
    }
    render() {
        return (
        <div> 
            {this.getSelectedBookDetails()}      
        </div>
        )
    }
}

export default graphql(getBookQuery,{
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
}) (BookDetails)
