const unroll = require("./unroll");

let square = null;
let smallerSquare = null;
let notSquare = null;
beforeAll(function() {
  square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  smallerSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];
  notSquare = [
    [1,2,3],
    [4,5,6]
  ];
})

afterAll(function() {
  square = null;
  smallerSquare = null;
  notSquare = null;
})

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

});

describe('should return a single array with values', function () {
  it('should return return values in a spiral', function () {
    expect(unroll(square)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
    expect(unroll(smallerSquare)).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  });
});

describe('should return -1 if not a square', function () {
  it('should return -1', function() {
    expect(unroll([[1,2,3],[4,5,6]])).toEqual(-1);
  })
})