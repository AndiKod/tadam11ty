
module.exports = function (eleventyConfig) {

  // --- SASS compilation on save ---
  // Re compile 11ty on scss changes saved
  eleventyConfig.addWatchTarget("./src/assets/sass/");
  eleventyConfig.addWatchTarget("./src/assets/js/");
  // Save the resulted css file in `dist/css`
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/assets/js");
  eleventyConfig.addPassthroughCopy('./src/assets/img');

  // Alias `layout: post` to `layout: layouts/post.njk` ...
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("home", "layouts/home.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  // --- Shortcodes ---
  // {% YouTube {video: "DJztXj2GPfk"} %} Insert a full-width YouTube video
  eleventyConfig.addShortcode('YouTube', require('./lib/shortcodes/youtube'));

  // --- Filters ---
  // {% for post in collections.posts | limit(-2) %} Returns the 2 most recent posts
  eleventyConfig.addFilter('limit', require('./lib/filters/arr-res-limit'));
  // {% set postdate = page.date %} then... Posted on: {{ postdate | readableDate }}
  eleventyConfig.addFilter('readableDate', require('./lib/filters/readableDate'));


  // --- tagList, filter and collection
  function filterTagList(tags) {
      return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
    }
  eleventyConfig.addFilter("filterTagList", filterTagList);
  // Create the filtered array of all tags
  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
    (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });
    return filterTagList([...tagSet]);
  });


  // --- Misc ---
  eleventyConfig.setQuietMode(true);

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data"
    },
  };
};
