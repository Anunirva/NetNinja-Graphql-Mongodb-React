
import { gql } from 'apollo-boost';

const booksQuery = gql`
    {
        books {
            name,
            genre,
            id
        }
    }
`

 const authorsQuery = gql`
    {
        authors {
            name,
            id
        }
    }
`

const addBookMutation = gql`
    mutation ($name: String!, $genre: String!, $authorId: ID! ) {
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name,
            id
        }
    }
`

const getBookQuery = gql`
    query($id: ID){
        book(id:$id){
            name
            id
            genre
            author{
                name
                age
                books{
                    name
                    genre
                }
            }
        }
    }
`

export { booksQuery, authorsQuery, addBookMutation, getBookQuery }