const multiply = require("./multiplier");
describe("multiply", ()=>{
    it("Should multiply two numbers", ()=>{
        expect(multiply(2, 3)).toBe(6);
    });
    it("Should print the same number if one number was passed", ()=>{
        expect(multiply(4)).toBe(4);
    });
    it("Should print 1 if there is not parametere being passed", ()=>{
        expect(multiply()).toBe(1)
    });
    it("Should multiply more than three numbers", ()=>{
        expect(multiply(2, 4, 3)).toBe(24);
    });
})