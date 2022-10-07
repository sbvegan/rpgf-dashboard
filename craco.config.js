const CracoLessPlugin = require('craco-less');
const modifyVars = require("./modifyVars.json")

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: modifyVars,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};