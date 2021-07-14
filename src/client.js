
const fetch = require('node-fetch');
require('dotenv').config();

const url = `http://localhost:${process.env.port}/graphql`;

const callAPI = (request) => {
    const requestBody = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(request)
    };
    return fetch(url, requestBody)
    .then(data => data.json())
    .catch(e => Promise.reject(e.message()));
};

// query type
const getAuthor = () => {
    const authorQuery = '{ getAuthorById(id: 2) { fullname membership } }';
    callAPI({ query: authorQuery })
    .then(response => console.log(response.data))
    .catch(e => console.error(e));
}

// mutation type
const addPost = () => {
    const query = `mutation AddPost($postdata: PostInput){
         addPost(post: $postdata) {
              postId title authorId
        }
    }`;
    const variables = { 
        postdata: {
        title: "Test title 21",
        content: "adfadf adfadf adfadsf adsfdsf",
        postId: 21,
        authorId: 4
        }
    };
    callAPI({ query, variables })
    .then(response => console.log(response.data))
    .catch(e => console.error(e));
}

getAuthor();

addPost();




