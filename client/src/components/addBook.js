import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { authorsQuery, addBookMutation, booksQuery } from '../queries/queries';

class AddBook extends Component {

    constructor(){
        super();
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        }
    }

    getAuthors(){
        const  data  = this.props.authorsQuery;
        if(data.loading){
            return (<option>Author Loading</option>)
        } else{
            return data.authors.map(author => {
                return (
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            })
        }
    } 
    onBookAdd(e) {
        e.preventDefault();
        this.props.addBookMutation({
            variables:{
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [{query:booksQuery}]
        });
    }
    
    render() {
        return (
        <form onSubmit={(e) => this.onBookAdd(e)}>
            <div>
                <label>Book name:</label>
                <input type="text" onChange={(e) => this.setState({name:e.target.value})}></input>
            </div>
            <div>
                <label>Genre:</label>
                <input type="text" onChange={(e) => this.setState({genre:e.target.value})}></input>
            </div>
            <div>
                <label>Author:</label>
                <select onChange={(e) => this.setState({authorId:e.target.value})}>
                    <option>Select Author</option>
                    {this.getAuthors()}
                </select>
            </div>
            <button>+</button>
        </form>
        )
    }
}
export default compose(
    graphql(authorsQuery,{name:"authorsQuery"}),
    graphql(addBookMutation,{name:"addBookMutation"})
)(AddBook);
