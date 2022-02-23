
module.exports = function (eleventyConfig) {


  // --- SASS compilation on save ---

  // Re compile 11ty on scss changes saved
  eleventyConfig.addWatchTarget("./src/assets/sass/");
  eleventyConfig.addWatchTarget("./src/assets/js/");
  // Save the resulted css file in `dist/css`
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/assets/js");
  /* eleventyConfig.addPassthroughCopy('./src/static'); */
  // Public images
  eleventyConfig.addPassthroughCopy('./src/assets/img');

  // --- Collections ---
  // Create an array of all tags
  eleventyConfig.addCollection("tagList", require('./lib/collections/tagList'));


  // --- Shortcodes ---
  // {% YouTube {video: "DJztXj2GPfk"} %} Insert a full-width YouTube video
  eleventyConfig.addShortcode('YouTube', require('./lib/shortcodes/youtube'));

  // --- Filters ---
  // {% for post in collections.posts | limit(-2) %} Returns the 2 most recent posts
  eleventyConfig.addFilter('limit', require('./lib/filters/arr-res-limit'));

  // --- Misc ---
  eleventyConfig.setQuietMode(true);

  return {
    dir: {
      input: "src",
      output: "_site",
      /* includes: "includes" */
    },
  };
};
