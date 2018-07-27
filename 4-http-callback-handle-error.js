const request = require('request');

function handleError(error) {
  console.log(`Error occured: ${error}`);
}

function myCallback(error, response, body) {
  if (error) handleError(error);
  console.log(body);
}
request('https://jsonplaceholder.typicode.com/posts/1', myCallback);