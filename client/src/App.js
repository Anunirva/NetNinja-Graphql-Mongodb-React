import React, { Component } from 'react';
import BookList from './components/BookList';
import AddBook from './components/addBook';

// Import ApolloClient
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client= {client}>
        <div>
          <h1>Welcome to GRAPHQL</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
