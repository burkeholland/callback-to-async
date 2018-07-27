const request = require('request');

function handleError(error) {
  console.log(`Error occured: ${error}`);
}

const baseURL = 'https://jsonplaceholder.typicode.com/';

request(`${baseURL}comments/53`,
  function (err, res, body) {
    if (err) handleError(err);

    let comment = JSON.parse(body);
    request(`${baseURL}posts/${comment.postId}`, function (err, res, body) {
      if (err) handleError(err);

      let post = JSON.parse(body);
      request(`${baseURL}users/${post.userId}`, function (err, res, body) {
        if (err) handleError(err);

        console.log(body);
      });
    });
  });