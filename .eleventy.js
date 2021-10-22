const path = require('path');
module.exports = function (eleventyConfig){
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addWatchTarget("css");
  eleventyConfig.addWatchTarget("img");
  eleventyConfig.addWatchTarget("src/js");
  eleventyConfig.addWatchTarget("pages");
  const basePath = process.cwd();
  const inputAbsolute = path.join(basePath, 'path');
  const includesAbsolute = path.join(basePath, 'templates', '_components');
  const layoutAbsolute = path.join(basePath, 'templates', '_layouts');

  return {
    dir: {
      input: 'pages',
      output: 'dist',
      includes: path.relative(inputAbsolute, includesAbsolute),
      layouts: path.relative(inputAbsolute, layoutAbsolute),
    },
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateEngineOverride: 'njk',
  }
}
