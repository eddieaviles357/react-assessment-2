const unroll = require("./unroll");

let square = null;
beforeAll(function() {
  square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
})

afterAll(function() {
  square = null;
})
describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

});

describe('should return correct value', function () {
  it('should return return a single array with values of the input', function () {
    expect(unroll(square)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  })
})