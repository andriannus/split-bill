module.exports = {
  chainWebpack(config) {
    config.plugin("html").tap(options => {
      options[0].title = "Split Bill";
      return options;
    });
  },
};
