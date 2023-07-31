// import =================================================== //
// libs ----------------------------------------------------- //
const WebpackMerge = require("webpack-merge");
// plugins -------------------------------------------------- //
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// common config -------------------------------------------- //
const commonConfig = require("./webpack.common");

// constants ================================================ //
const productionConfig = {
    mode: "production",
    output: {
        filename: "[name].[hash].js",
    }
};

// export =================================================== //
module.exports = WebpackMerge(productionConfig, commonConfig);