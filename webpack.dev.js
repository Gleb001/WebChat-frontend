// import =================================================== //
// libs ----------------------------------------------------- //
const WebpackMerge = require("webpack-merge");
const path = require("path");
// common config -------------------------------------------- //
const commonConfig = require("./webpack.common");

// constants ================================================ //
const developmentConfig = {
    output: {
        filename: "[name].js",
        compareBeforeEmit: false,
    },
    devtool: "eval",
    devServer: {
        hot: true,
        compress: true,
        static: {
            directory: path.resolve(__dirname, "./dist"),
        },
        client: {
            overlay: true
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        open: true,
    },
    mode: "development",
};

// export =================================================== //
module.exports = WebpackMerge.merge(
    developmentConfig,
    commonConfig
);