// --- Imports ---

// Needed for Environement Variables
import 'dotenv/config';

// Navigation - https://www.11ty.dev/docs/plugins/navigation/
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
// Syntax Highlighting - https://www.11ty.dev/docs/plugins/syntaxhighlight/
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";


// Nunjuck filters for the Blog/Collections functionality
import limit from './lib/filters/arr-res-limit.js';
import readableDate from './lib/filters/readableDate.js';
import YouTube from './lib/shortcodes/youtube.js';


// --- Start of the Config itself ---
export default async function(eleventyConfig) {

  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);


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
  eleventyConfig.addShortcode('YouTube', YouTube);

  // --- Filters ---
  // Returns the 2 most recent posts
  // {% for post in collections.posts | limit(-2) %} 
  eleventyConfig.addFilter('limit', limit);
  // {% set postdate = page.date %} 
  //then... Posted on: {{ postdate | readableDate }}
  eleventyConfig.addFilter('readableDate', readableDate);


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
      input: "src",      // Default at project root
      output: "_site",   // hmmm, actually it's the default
      data: "_data"      // Default folder too (but can be changed)
    },
    templateFormats: ["html", "njk", "md", "11ty.js"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };

  // --- End of the Config itself ---
};
