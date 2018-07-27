const request = require('request-promise-native');
const baseURL = 'https://jsonplaceholder.typicode.com/';

let handleError = (error) => {
  console.log(`Error occured: ${error}`);
};

request(`${baseURL}comments/53`)
  .then(body => {

    let comment = JSON.parse(body);
    request(`${baseURL}posts/${comment.postId}`)
      .then(body => {

        let post = JSON.parse(body);
        request(`${baseURL}users/${post.userId}`)
          .then(body => {
            console.log(body);
          })
          .catch(error => {
            handleError(error);
          });
      })
      .catch(error => {
        handleError(error);
      });
  })
  .catch(error => {
    handleError(error);
  });