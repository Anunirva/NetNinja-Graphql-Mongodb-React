import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { booksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

class BookList extends Component {
    constructor(){
        super();
        this.state = {
            selectedBook: ""
        }
    }
    displayBooks(){
       const { data } = this.props;
       if(data.loading){
           return (
               <div>Loading Books</div>
           )
       }else {
           return data.books.map(book => {
               return (
                    <li key={book.id} onClick={(e) => this.setState({selectedBook: book.id})}>{book.name}</li>
               )
           })
       }
    }
    render() {
        return (
        <div>
            <ul>
                {this.displayBooks()}
            </ul>
            <BookDetails bookId={this.state.selectedBook} />
        </div>
        )
    }
}
export default graphql(booksQuery) (BookList);
