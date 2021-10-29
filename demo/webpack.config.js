const webpack = require("@nativescript/webpack");

module.exports = (env) => {
	webpack.init(env);

	// Learn how to customize:
	// https://docs.nativescript.org/webpack
    webpack.chainWebpack(conf => {
        conf.resolve.alias.set('svelte$', 'svelte/internal')
    })

	return webpack.resolveConfig();
};


