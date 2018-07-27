const request = require('request');
const baseURL = 'https://jsonplaceholder.typicode.com/posts/';

let getPosts = new Promise((resolve, reject) => {
  request(`${baseURL}1`, (err, res, body) => {
    if (err) reject(err);
    resolve(body);
  });
});

getPosts
  .then(body => {
    console.log(body);
  })
  .catch(error => {
    console.log(`Error occured: ${error}`);
  });