// https://prettier.io/docs/en/configuration.html

module.exports = {
  printWidth: 120,
  singleQuote: false, //Why? https://www.youtube.com/watch?v=NPB34lDZj3E&ab_channel=ConFooDeveloperConference
  trailingComma: "all",
  overrides: [
    {
      // These files may be run as-is in IE 11 and must not have ES5-incompatible trailing commas
      files: ["*.html", "*.htm"],
      options: {
        trailingComma: "es5",
      },
    },
  ],
};
