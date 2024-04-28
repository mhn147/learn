module.exports = (env) => ({
    devtool: "eval",
    mode: env.mode,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    }
});