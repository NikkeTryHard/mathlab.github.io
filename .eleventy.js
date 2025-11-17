const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const mathProtect = require("./src/_includes/plugins/math-protect.js");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addCollection("labs", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/lab/**/*.md");
  });

  eleventyConfig.setLibrary("md", markdownIt({
    html: true,
    breaks: false,
    linkify: true
  }).use(mathProtect));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes"
    },
    templateFormats: ["md", "njk", "html"]
  };
};