const stringCalculator1 = require("./app");
test("returns 0 for an empty string", () => {
  expect(stringCalculator1("")).toBe(0);
});
test("returns the number itself for a single number", () => {
  expect(stringCalculator1("5")).toBe(5);
  expect(stringCalculator1("10")).toBe(10);
});
test("returns the sum of two numbers separated by a comma", () => {
  expect(stringCalculator1("1,2")).toBe(3);
  expect(stringCalculator1("10,20")).toBe(30);
});
test("returns the sum of multiple numbers separated by a comma", () => {
  expect(stringCalculator1("1,2,3")).toBe(6);
  expect(stringCalculator1("10,20,30,40")).toBe(100);
});
test("returns the sum of numbers separated by commas or newlines", () => {
  expect(stringCalculator1("1\n2,3")).toBe(6);
  expect(stringCalculator1("4,5\n6")).toBe(15);
});
test("throws an error when a negative number is present", () => {
  expect(() => stringCalculator1("1,-2,3")).toThrow(
    "Negative numbers not allowed: -2"
  );
  expect(() => stringCalculator1("-1,-2,-3")).toThrow(
    "Negative numbers not allowed: -1, -2, -3"
  );
});
test("handles custom delimiters", () => {
  expect(stringCalculator1("//;\n1;2")).toBe(3);
  expect(stringCalculator1("//|\n2|3|8")).toBe(13);
});

test("returns 0 for an empty string", () => {
  expect(stringCalculator1("")).toBe(0);
});

test("returns the number itself for a single number", () => {
  expect(stringCalculator1("1")).toBe(1);
});

test("returns the sum of two comma-separated numbers", () => {
  expect(stringCalculator1("1,5")).toBe(6);
});

test("handles newline as a delimiter", () => {
  expect(stringCalculator1("1\n2,3")).toBe(6);
});

test('handles custom delimiter ";"', () => {
  expect(stringCalculator1("//;\n1;2")).toBe(3);
});

test("handles newline as a delimiter with two numbers", () => {
  expect(stringCalculator1("1\n2")).toBe(3);
});

test("returns the sum of multiple newline-separated numbers", () => {
  expect(stringCalculator1("6\n4\n9")).toBe(19);
});

test("handles multiple delimiters (newlines and commas)", () => {
  expect(stringCalculator1("1\n2,3")).toBe(6);
});

test('handles custom delimiter "\\"', () => {
  expect(stringCalculator1("//\\\n1\\2")).toBe(3);
});

test('handles custom delimiter "\\t"', () => {
  expect(stringCalculator1("//\t\n1\t2\t3")).toBe(6);
});

test('handles custom delimiter """ (double quotes)', () => {
  expect(stringCalculator1('//"\n1"2"3"4')).toBe(10);
});

test("throws an error when a negative number is present", () => {
  expect(() => stringCalculator1("3,4,-8")).toThrow(
    "Negative numbers not allowed: -8"
  );
});

test("throws an error when multiple negative numbers are present", () => {
  expect(() => stringCalculator1("-7,-9,-10,-11")).toThrow(
    "Negative numbers not allowed: -7, -9, -10, -11"
  );
});

test("ignores numbers greater than 1000", () => {
  expect(stringCalculator1("1001,1,2,3,1")).toBe(7);
});

test("ignores numbers greater than 1000 with newlines as delimiter", () => {
  expect(stringCalculator1("1001\n1\n2\n3\n1")).toBe(7);
});

test('handles custom delimiter "[;;;]"', () => {
  expect(stringCalculator1("//[;;;]\n1;;;2;;;3")).toBe(6);
});

test('handles custom delimiter "[***]"', () => {
  expect(stringCalculator1("//[***]\n1***2***4***1")).toBe(8);
});

test('handles multiple custom delimiters "[;;;]" and "[===]"', () => {
  expect(stringCalculator1("//[;;;][===]\n1;;;20===5")).toBe(26);
});

test('handles multiple custom delimiters "[***]", "[;;]", and "[+++++]"', () => {
  expect(stringCalculator1("//[***][;;][+++++]\n1***2+++++4;;1")).toBe(8);
});

test("handles an empty custom delimiter", () => {
  expect(stringCalculator1("//[]\n1241")).toBe(8); // This might need clarification in the implementation
});
