// Let's suppose that we need to find a certain value in an array of numbers.
// Using linear search algorithm note that this code will loop entire array.

(() => {
  const ONE_BILLION = 1000000000; // 1.000.000.000

  let search = ONE_BILLION - 1; // 999.999.999
  let attempts = 0;

  console.time("timer");

  for (let index = 0; index < ONE_BILLION; index++) {
    ++attempts;
    if (index === search) break;
  }

  console.timeEnd("timer");
  console.log("Total of attempts: ", attempts);
})();
