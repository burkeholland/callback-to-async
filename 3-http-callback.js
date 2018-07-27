const request = require('request');

function myCallback(error, response, body) {
  console.log(body);
}

request('https://jsonplaceholder.typicode.com/posts/1', myCallback);