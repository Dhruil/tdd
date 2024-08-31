function stringCalculator1(input) {
  if (input === "") {
    return 0;
  }
  if (input.length === "1" || typeof input === "number") {
    let ans = input.reduce((sum, itr) => sum + itr, 0);
    return ans;
  }
}
console.log(stringCalculator1(12));


