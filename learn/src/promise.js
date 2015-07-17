function timeout(ms) {
  return new Promise((resolve,reject) => {
    setTimeout(resolve, ms);
  });
}

timeout(10000).then(() => {
  console.log('done');
});