let p = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Done! 🎉');
  }, 1000);
});

p.then(message => {
  console.log(message);
  console.log('Me First 🥇');
});