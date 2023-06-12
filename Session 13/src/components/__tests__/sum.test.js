import { sum } from "../sum";
test("Check sum of two positive numbers", () => {
  expect(sum(2, 5)).toBe(7);
  expect(sum(5, 1)).toBe(6);
  expect(sum(6, 2)).toBe(8);
  expect(sum(88, 2)).toBe(90);
});
