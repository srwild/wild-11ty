require('dotenv').config('./.env');

module.exports = function (eleventyConfig) {

  // Move without doing anything
  eleventyConfig.addPassthroughCopy('./src/images/');
  eleventyConfig.addPassthroughCopy('./src/_redirects');
  eleventyConfig.addPassthroughCopy({ './src/favicons/*': '/' });

  // Shhhhh eleventy
  eleventyConfig.setQuietMode(true);

  // Local Server
  eleventyConfig.setServerOptions({
    // Show local network IP addresses for device testing
    showAllHosts: true,
  });

  // Copy with serve, not just build
  eleventyConfig.setServerPassthroughCopyBehavior('copy');

  // Watch for Changes
  eleventyConfig.addWatchTarget('./src/css/**/*');
  eleventyConfig.addWatchTarget('./src/js/**/*');
  eleventyConfig.addWatchTarget('./src/images/**/*');

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
