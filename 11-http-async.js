const request = require('request-promise-native');
const baseURL = 'https://jsonplaceholder.typicode.com/';

async function main() {
  try {
    let response = await request(`${baseURL}posts/1`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

main();