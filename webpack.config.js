const path = require("path");

module.exports = {
    entry: {
        popup: "./popup/left-pad.js"
    },
    output: {
        path: path.resolve(__dirname, "addon"),
        filename: "[name]/index.js"
    },
    mode: 'none',
};
