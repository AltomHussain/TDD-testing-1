const adder = require("./adder");

describe("adder", () => {
  it("should add two numbers", () => {
    expect(adder(2, 2)).toBe(8);
  });
  it("should add three numbers", () => {
    expect(adder(2, 3, 5)).toBe(10);
  });

  it("should return one number", () => {
    expect(adder(5)).toBe(5);
  });

  it("should add any number of parameters", () => {
    expect(adder(3, 5, 6, 6, 4)).toBe(24);
  });
  it("should return 0 if no numbers are passed", () => {
    expect(adder()).toBe(0);
  });
});
