
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

  // Alias `layout: post` to `layout: layouts/post.njk` ...
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
  eleventyConfig.addLayoutAlias("home", "layouts/home.njk");


  // --- Collections ---
  // Create an array of all tags
  //eleventyConfig.addCollection("tagList", require('./lib/collections/tagList'));

  // --- Shortcodes ---
  // {% YouTube {video: "DJztXj2GPfk"} %} Insert a full-width YouTube video
  eleventyConfig.addShortcode('YouTube', require('./lib/shortcodes/youtube'));

  // --- Filters ---
  // {% for post in collections.posts | limit(-2) %} Returns the 2 most recent posts
  eleventyConfig.addFilter('limit', require('./lib/filters/arr-res-limit'));

  eleventyConfig.addFilter('readableDate', function(postdate){
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let day = postdate.getDate();
    let month = months[postdate.getMonth()];
    let year = postdate.getFullYear();

    return month + " " + day + " — " + year;
  });


  function filterTagList(tags) {
      return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
    }
  eleventyConfig.addFilter("filterTagList", filterTagList);
  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
    (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });
    return filterTagList([...tagSet]);
  });


//**************************************************************//


  // Filter using `Array.filter`
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getAll().filter(function(item) {
      return "blog" in item.data; // Looking for "foo: true" in frontmatter
    });
  });


  // Get only content that matches a tag
  eleventyConfig.addCollection("myPosts", function(collectionApi) {
    return collectionApi.getFilteredByTag("tag1");
  });




  // --- Misc ---
  eleventyConfig.setQuietMode(true);

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data"
      /* includes: "includes" */
    },
  };
};
