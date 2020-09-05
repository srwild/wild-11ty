module.exports = function (eleventyConfig) {
  // Doesn't use .gitignore
  eleventyConfig.setUseGitIgnore(false);

  // Move without doing anything
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addPassthroughCopy('./src/_redirects');

  // Shhhhh eleventy
  eleventyConfig.setQuietMode(true);

  // Directory settings
  return {
    dir: {
      input: './src',
      output: './_site',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
