function findOdd(A) {
  const countMap = new Map();

  A.forEach(num => {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  });

  for (let [key, value] of countMap) {
    if (value % 2 !== 0) {
      return key;
    }
  }
}
