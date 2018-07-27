const request = require('request-promise-native');
const baseURL = 'https://jsonplaceholder.typicode.com/';

async function main() {
  try {
    let result = await request(`${baseURL}comments/53`);
    let comment = JSON.parse(result);

    result = await request(`${baseURL}posts/${comment.postId}`);
    let post = JSON.parse(result);

    result = await request(`${baseURL}users/${post.userId}`);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

main();