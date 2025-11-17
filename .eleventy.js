const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const mathProtect = require("./src/_includes/plugins/math-protect.js");
const fs = require("fs");
const path = require("path");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addCollection("labs", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/lab/**/*.md");
  });

  function safeStat(p) {
    try {
      return fs.statSync(path.resolve(p));
    } catch {
      try {
        return fs.statSync(p);
      } catch {
        return null;
      }
    }
  }

  eleventyConfig.addFilter("mtimeISO", function(inputPath) {
    const stat = safeStat(inputPath);
    return stat ? stat.mtime.toISOString() : "";
  });

  eleventyConfig.addFilter("mtimeMs", function(inputPath) {
    const stat = safeStat(inputPath);
    return stat ? stat.mtime.getTime() : 0;
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