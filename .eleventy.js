module.exports = function(eleventyConfig) {
    // Copy the `css` and `images` folders to the output
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/images");

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }
    };
};
