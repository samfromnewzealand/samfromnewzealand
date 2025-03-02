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

  // Add a filter to display the current year (change from addNunjucksFilter to addFilter)
  eleventyConfig.addFilter("year", function() {
    return new Date().getFullYear();
  });

  // Add w3DateFilter for blog post dates
  eleventyConfig.addFilter("w3DateFilter", function(date) {
    return date.toISOString();
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/images");

  // Add collection navigation helpers for previous/next post links
  eleventyConfig.addFilter("getPreviousCollectionItem", (collection, page) => {
    const currentIndex = collection.findIndex(item => item.url === page.url);
    if (currentIndex === 0) return null;
    return collection[currentIndex - 1];
  });

  eleventyConfig.addFilter("getNextCollectionItem", (collection, page) => {
    const currentIndex = collection.findIndex(item => item.url === page.url);
    if (currentIndex === collection.length - 1) return null;
    return collection[currentIndex + 1];
  });

  // Create a collection for blog posts
  eleventyConfig.addCollection("post", function(collectionApi) {
    return collectionApi.getFilteredByTag("post");
  });

  // Try to add navigation plugin only if available
  try {
    const eleventyNavigation = require("@11ty/eleventy-navigation");
    eleventyConfig.addPlugin(eleventyNavigation);
  } catch (e) {
    console.warn("eleventy-navigation plugin not found. Navigation features will be disabled.");
  }

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
