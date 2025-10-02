// Question-2
const resolvedPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ message: 'delayed success!' }), 500);
  });

const rejectedPromise = () =>
  new Promise((_, reject) => {
    setTimeout(() => reject(new Error('delayed exception!')), 500);
  });

resolvedPromise()
  .then((res) => console.log(res))
  .catch((err) => console.error({ error: err.message }));

rejectedPromise()
  .then((res) => console.log(res))
  .catch((err) => console.error({ error: err.message }));
