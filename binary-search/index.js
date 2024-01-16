// Let's suppose that we need to find a certain value in an array of numbers.

(() => {
  console.time("timer");

  const values = Array.from({ length: 128 }, (_, i) => i + 1); // [1,...,128]

  let valueToFind = 128;
  let attempts = 0;

  let firstIndex = 0;
  let lastIndex = values.length - 1;
  let searching = true;

  while (searching) {
    ++attempts;

    const half = Math.floor((firstIndex + lastIndex) / 2);
    const kickIndex = values[half];

    console.log({ valueToFind, kickIndex, firstIndex, lastIndex });

    if (kickIndex === valueToFind) {
      searching = false;
    }
    if (kickIndex > valueToFind) {
      lastIndex = kickIndex - 1;
    }
    if (kickIndex < valueToFind) {
      firstIndex = kickIndex + 1;
    }

    console.log("------------------------------------------");
  }

  console.timeEnd("timer");
  console.log("Total of attempts: ", attempts);
})();
