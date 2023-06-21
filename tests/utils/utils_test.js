var tape = require("tape");

var utils = require("../../src/util");

tape.test("camel case", function(test) {
    utils.camelCase("")

    testCamelCase(test, "clientId", "clientId");
    testCamelCase(test, "client_id", "clientId");
    testCamelCase(test, "client_Id", "clientId");
    testCamelCase(test, "Client_Id", "ClientId");
    testCamelCase(test, "client_1", "client1");
    testCamelCase(test, "client_12", "client12");
    testCamelCase(test, "client_1_a", "client1A");
    testCamelCase(test, "client_12_b", "client12B");
    testCamelCase(test, "client_12_API", "client12API");
    testCamelCase(test, "Client_12_API", "Client12API");
    testCamelCase(test, "number_1_is_2", "number1Is2");

    test.end();
});

function testCamelCase(test, orig, expected) {
  let actual = utils.camelCase(orig);

  test.ok(actual === expected, `expected: ${orig} -> ${expected}; got: ${actual}`);
}