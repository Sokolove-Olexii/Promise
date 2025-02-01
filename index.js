const isOkay = false;

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    if (isOkay) {
      res("okay");
    } else {
      rej("not okay");
    }
  });
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("promise ended");
  });
