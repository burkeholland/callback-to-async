const request = require('request-promise-native');
const baseURL = 'https://jsonplaceholder.typicode.com/posts/';

request(`${baseURL}1`)
  .then(body => {
    console.log(body);
  })
  .catch(error => {
    console.log(`Error occured: ${error}`);
  });