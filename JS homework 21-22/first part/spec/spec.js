var pow = require('../app/js/script1.js');

describe("pow", function() {
  it("raises a number to the power of n", function() {

  	var result;

  	result = pow(2, 3);

    expect(result).toBe(8);
  });

  it("raises a number to the power of n", function() {

    var result;

    result = pow(3, 2);

    expect(result).toBe(9);
  });

  it("raises a number to the power of n", function() {

    var result;

    result = pow(2, 4);

    expect(result).toBe(16);
  });

});