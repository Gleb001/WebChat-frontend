// import =================================================== //
// libs ----------------------------------------------------- //
const path = require("path");
// plugins -------------------------------------------------- //
const HTMLWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// constants ================================================ //
const ROOT_PATH = path.resolve(__dirname, ".");
const SRC_PATH = ROOT_PATH + "/src";
const ALIAS = {
    "@app": SRC_PATH + "/app",
    "@pages": SRC_PATH + "/pages",
    "@shared": SRC_PATH + "/shared",
    "@widgets": SRC_PATH + "/widgets",
    "@entities": SRC_PATH + "/entities",
    "@features": SRC_PATH + "/features",
};

// export =================================================== //
module.exports = {
    entry: SRC_PATH + "/index.tsx",
    output: {
        path: ROOT_PATH + "/dist",
    },

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: ALIAS,
    },

    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.s[a|c]ss$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: SRC_PATH + "/index.html"
        }),
        // new MiniCssExtractPlugin()
    ],
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             defaultVendors: {
    //                 name: "vendors",
    //                 test: /node_modules/,
    //                 chunks: "all",
    //             }
    //         }
    //     },
    // },
};