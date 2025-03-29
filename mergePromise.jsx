function mergePromise(ajaxArray) {
  const data = [];
  let promise = Promise.resolve();
  ajaxArray.forEach(
    (ajax) =>
      (promise = promise.then(ajax).then((response) => data.push(response)))
  );
  return data;
}

mergePromise([ajax1, ajax2, ajax3]).then((data) => console.log(data));
