const mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("data loaded");
    } else {
      reject("something broke");
    }
  }, 2000);
});

mypromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("error", error);
  });


console.log("1");
mypromise.then(() => console.log("3"));
console.log("2");
// prints: 1, 2, 3  (not 1, 2, 3 in "real time" — "3" happens later, when promise resolves)
