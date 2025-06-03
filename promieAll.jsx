function promiseAll() {
  let results = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    const addData = (index, value) => {
      results[index] = value;
      count++;
      if (count === results.length) resolve(results);
    };

    promises.forEach((promise, index) => {
      if (promsie instanceof Promise) {
        promise.then(
          (res) => {
            addData(index, res);
          },
          (err) => reject(err)
        );
      } else {
        addData(index, promise);
      }
    });
  });
}
