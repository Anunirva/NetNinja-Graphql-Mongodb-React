// Import all required DEPENDENCIES

// Import express here
const express = require('express');

// Import Mongoose
const mongoose = require('mongoose');

// Import grapghql here to make express understand grapghql
const graphqlHTTP = require('express-graphql');

//Import schema
const schema = require('./Schema/schema');

// Import CORS package
const cors = require('cors');

//MIDDLEWARES

// Initialize dependencies here
const app = express();

// Use Cors for N0-cross-origion-errors
app.use(cors());

// Bind express with graphql-- express server to run grapghQL
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


// Connect to Mongoose
mongoose.connect('mongodb://manju:test123@ds127704.mlab.com:27704/netninja_graphql');

// Establish Connection
mongoose.connection.once('open', ()=> {
    console.log('MongoDB connection established successfully!!');
});


// Start Express port
app.listen(4000, () => {
    console.log('now listening for requests on port 3000');
});
