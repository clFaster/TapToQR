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
    devtool: "source-map",
    mode: 'production',
    optimization: {
        minimize: false,
        minimizer: [new TerserPlugin()],
    },
};
