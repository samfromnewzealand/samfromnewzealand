module.exports = function(eleventyConfig) {
  // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy("src/css");
  
  // Copy the `img` directory to the output
  eleventyConfig.addPassthroughCopy("src/img");
  
  // Copy the `js` directory to the output
  eleventyConfig.addPassthroughCopy("src/js");

  // Add a date formatting filter
  eleventyConfig.addFilter("dateDisplay", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-NZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Get the first `n` elements of a collection
  eleventyConfig.addFilter("slice", (array, n) => {
    return array.slice(0, n);
  });

  // Split a string into an array
  eleventyConfig.addFilter("split", (string, delimiter) => {
    return string.split(delimiter);
  });

  // Create a collection for blog posts
  eleventyConfig.addCollection("post", function(collectionApi) {
    return collectionApi.getFilteredByTag("post");
  });

  // Return your object options
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
