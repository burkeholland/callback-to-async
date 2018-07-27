const request = require('request-promise-native');
const baseURL = 'https://jsonplaceholder.typicode.com/';

let handleError = (error) => {
  console.log(`Error occured: ${error}`);
};

request(`${baseURL}comments/53`)
  .then(body => {
    let comment = JSON.parse(body);
    return Promise.all([body, request(`${baseURL}posts/${comment.postId}`)])
  })
  .then(results => {
    let post = JSON.parse(results[1]);
    return Promise.all([...results, request(`${baseURL}users/${post.userId}`)]);
  })
  .then(results => {
    console.log(results[2]);
  })
  .catch(error => {
    handleError(error);
  });