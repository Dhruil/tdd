function stringCalculator1(input) {
  if (input === "") {
    return 0;
  }

  let delimiters = [",", "\n"];
  let numbersPart = input;

  // Check for custom delimiter
  if (input.startsWith("//")) {
    const delimiterEndIndex = input.indexOf("\n");
    const delimiterPart = input.substring(2, delimiterEndIndex);

    // Handling invalid delimiter like "[]"
    if (delimiterPart === "[]") {
      throw new Error("Empty delimiter is not allowed");
    }

    // Handling multiple custom delimiters like //[***][;;]
    const customDelimiters = delimiterPart.match(/\[(.*?)\]/g); //also we can use matchall

    if (customDelimiters) {
      customDelimiters.forEach((delimiter) => {
        delimiters.push(delimiter.slice(1, -1));
      });
    } else {
      delimiters.push(delimiterPart);
    }

    numbersPart = input.substring(delimiterEndIndex + 1);
  }

  // Create a regex to split based on multiple delimiters

  const delimiterRegex = new RegExp(
    `[${delimiters
      .map((d) => d.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"))
      .join("")}]`
  );
  const numbers = numbersPart.split(delimiterRegex).map(Number);

  // Handle negative numbers
  const negatives = numbers.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  // Ignore numbers greater than 1000
  const validNumbers = numbers.filter((num) => num <= 1000);

  return validNumbers.reduce((sum, num) => sum + num, 0);
}

module.exports = stringCalculator1;
