const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const AppRoot = require('./controllers');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();


app.use(bodyParser.urlencoded({ 'extended': true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("connected to mongodb succesfully"))
.catch(e => console.error("Error connecting mongodb", e.message));

const db = mongoose.connection;

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: AppRoot,
    graphiql: true,
}));


const port = process.env.port || 8081;

app.listen(port, () => console.log("server started on port: ", port));


