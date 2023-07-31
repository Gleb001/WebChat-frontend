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
    watchOptions: {
        ignored: /node_modules/,
    },
    devServer: {
        hot: true,
        port: 9000,
        compress: true,
        static: {
            directory: path.resolve(__dirname, "./dist"),
        },
        client:{
            overlay: true
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