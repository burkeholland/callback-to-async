const axios = require('axios');

const baseURL = 'https://jsonplaceholder.typicode.com';

async function main() {
  let posts = await axios(`${baseURL}/posts`);

  for (let post of posts.data) {
    let user = await axios(`${baseURL}/users/${post.userId}`);
    console.log(JSON.stringify(user.data.username));
  }

  console.log('All Done');
}

main();