let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Done! 🎉');
  }, 1000);
});

p.then(message => {
  console.log(message);
  console.log('Me First 🥇');
});
