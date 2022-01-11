/**
 * Retrieve the params from window.location
 * @typedef {Object} Config
 * @property {string} param
 * @property {string} name
 * @property {(value: string) => string} mapping
 * @param {...(Config|string)} keys
 * @returns {Object}
 */
export function get() {
  if (typeof location === "undefined") return null;

  const usp = new URLSearchParams(location.search);
  const output = {};

  for (let arg of arguments) {
    let key, value;
    if (typeof arg === "string") {
      key = arg;
      value = usp.getAll(arg);
    } else {
      let params = usp.getAll(arg.param);

      key = arg.name ? arg.name : arg.param;
      value = arg.mapping ? params.map(arg.mapping) : params;
    }

    output[key] = value.length === 1 ? value[0] : value;
  }

  return output;
}

// module.exports = {
//   get,
// };
