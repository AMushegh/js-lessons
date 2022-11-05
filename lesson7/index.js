//exersice 1

// const myInterval = (cb, seconds) => {
//   setTimeout(() => {
//     cb();
//     myInterval(cb, seconds);
//   }, seconds * 1000);
// };

// myInterval(() => {
//   console.log("interval");
// }, 2);

// exercise
function sendMyMessageLater(message) {
  const timeoutDuration = Math.floor(Math.random() * 5) + 1; // random number from 1 to 5

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, timeoutDuration * 1000);
  });
}

// sendMyMessageLater("Hi there all").then((data) => console.log(data));
// console.log("here");

// exercise 2

function foo(value) {
  return new Promise((res, rej) => {
    if (typeof value === "string") {
      res(value.toUpperCase());
    }
    rej(value);
  });
}

// foo(10)
//   .then((resValue) => resValue + " additional")
//   .then((data) => console.log(data))
//   .catch((rejValue) => rejValue * 2)
//   .then((data) => console.log(data));

function mapPromise(promise, mapper) {
  return new Promise((res, rej) => {
    promise.then((value) => res(mapper(value))).catch((value) => rej(value));
  });
}

const myPromise = new Promise((resolve, reject) => {
  reject(2);
});
const timesTwo = (val) => val * 2;

mapPromise(myPromise, timesTwo)
  .then((result) => console.log(result))
  .catch((value) => console.log(value));
