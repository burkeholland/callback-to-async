const request = require('request');

request('https://jsonplaceholder.typicode.com/posts/1', function myCallback(error, response, body) {
  console.log(body);
});