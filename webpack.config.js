const path = require("path");
const copyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/main.ts",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new copyPlugin({
            patterns: [
                {
                    from: "public",
                    to: "./"
                }
            ]
        })
    ],
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
};