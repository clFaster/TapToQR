const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        popup: "./popup/generateQrCode.js"
    },
    output: {
        path: path.resolve(__dirname, "addon"),
        filename: "[name]/bundle.js"
    },
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};
