module.exports = {
    mode: "development",
    entry: {
        "index": "./src/index.ts",
        "bar": "./src/bar-index.ts"
    },
    output: { filename: "[name].js" },
    resolve: { extensions: [".ts", ".js"] },
    module: {
        rules: [
            { test: /\.ts/, use: "ts-loader", exclude: [ /node_modules/] }
        ]
    },
    devServer: {
        contentBase: "./webapp",
        port: 4500
    }
};