const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const mathProtect = require("./src/_includes/plugins/math-protect.js");
const fs = require("fs");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addCollection("labs", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/lab/**/*.md");
  });

  eleventyConfig.addFilter("mtimeISO", function(inputPath) {
    try {
      const stat = fs.statSync(inputPath);
      return stat.mtime.toISOString();
    } catch (e) {
      return "";
    }
  });

  eleventyConfig.addFilter("mtimeMs", function(inputPath) {
    try {
      const stat = fs.statSync(inputPath);
      return stat.mtime.getTime();
    } catch (e) {
      return 0;
    }
  });

  eleventyConfig.setLibrary("md", markdownIt({
    html: true,
    breaks: true,
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