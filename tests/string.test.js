const nonRepeatingChar =require("../app")

describe('Check String character', () => {
  it("Should get only single character",()=>{
    expect(nonRepeatingChar("TestString")).toEqual("ering")
  });
  it('If empty string present then get error',()=>{
    expect(nonRepeatingChar("")).toEqual('This string input cannot be empty')
  });
  it('If string is contains number then get error',()=>{
    expect(nonRepeatingChar("Swati123")).toEqual('Please enter vaild string')
  });
  it('If string contains special then get error',()=>{
    expect(nonRepeatingChar("Swati@#")).toEqual('Please remove special characters.')
  });
});