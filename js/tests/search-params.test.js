const { test } = require("uvu");
const assert = require("uvu/assert");
const { get } = require("../search-params");

global.location = {
  search: "?n=Sean&c=Sam&c=Ezra",
};

test("Exports `get` correctly", () => {
  assert.not.throws(get);
});

test("Returns an object", () => {
  assert.type(get(), "object");
});

test("Handles single params", () => {
  const { n } = get("n");
  assert.type(n, "string");
  assert.is(n, "Sean");
});

test("Maps params", () => {
  const { n } = get({ param: "n", mapping: (n) => n.toUpperCase() });
  assert.is(n, "SEAN");
});

test("Renames params", () => {
  const { test } = get({ param: "n", name: "test" });
  assert.is(test, "Sean");
});

test("Handles multiple params", () => {
  const { c } = get("c");
  assert.instance(c, Array);
  assert.is(c.length, 2);
});

test.run();
