/**
 * Creates a new element with given attributes
 * @param   {String} tag        The type of element to create
 * @param   {Object} attributes An object of attributes to be applied
 * @returns {Node}              A new node with applied attributes
 */
var el = function (tag, attributes) {
  if (typeof document === undefined) return;

  var element = document.createElement(tag);

  for (var key in attributes) {
    if (key in element) {
      element[key] = attributes[key];
    } else {
      element.setAttribute(key, attributes[key]);
    }
  }

  return element;
};
