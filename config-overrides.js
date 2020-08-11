// config-overrides.js:

const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    common: "src/common/",
    views: "src/views/",
    assets: "src/assets/",
    "@public": "public", // in root of app outside of src
  })(config);
  return config;
};
