const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets }) => {
	mode = mode || "production";
	const presetConfig = presets?.length ? presetConfig({ mode, presets }) : {}
	return merge(
		{
			// mode,
			mode: "none",
			output: {
				filename: "bundle.js",
			},
			module: {
				rules: [
					{
						test: /\.jpe?g$/,
						type: "asset"
					}
				]
			},
			plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
		},
		modeConfig(mode),
		presetConfig
	);
};