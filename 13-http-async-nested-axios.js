const axios = require('axios');
const baseURL = 'https://jsonplaceholder.typicode.com/';

async function main() {
  try {
    let comment = await axios(`${baseURL}comments/53`);
    let post = await axios(`${baseURL}posts/${comment.data.postId}`);
    let user = await axios(`${baseURL}users/${post.data.userId}`);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

main();