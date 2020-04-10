const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  
  eleventyConfig.addCollection('diet', collection => {
    return collection.getFilteredByGlob('diet/*.md');
  });
  
};
