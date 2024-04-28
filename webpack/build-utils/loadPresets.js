const { merge } = require("webpack-merge");

const applyPresets = env => {
    let { presets } = env;

    if(!presets) return {};

    /** @type {string[]} */
    const mergedPresets = [].concat(...[presets]);
    const mergedConfigs = mergedPresets.map(
        presetName => require(`./presets/webpack.${presetName}`)(env)
    );

    return merge({}, ...mergedConfigs);
}

module.exports = applyPresets;