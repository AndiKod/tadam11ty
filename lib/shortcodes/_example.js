module.exports = (options = {}) => {
  // Arguments expected from the Shortcode
  const { prop1 = '', prop2 = 'DefaultValue' } = options

  // Code to be inserted into the page, with dynamic data
  return `<p class="${prop1}">Hello ${prop2} !</p>`;
}

/* Inside .eleventy.js
*
*  eleventyConfig.addShortcode('codeName', require('./lib/shortcodes/_example'));
*/

/* Inside some template.njk
*
*  {% codeName {prop1: "greeting", prop2: "Fluffy"} %}
*/