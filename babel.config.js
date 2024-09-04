const presets = [
	[
		'@babel/preset-env',
		{
			targets: {
				esmodules: true,
			},
		},
	],
	['@babel/preset-react', {
		runtime: 'automatic',
	}],
];

// "@babel/plugin-proposal-class-properties"
const plugins = [
	'@babel/plugin-proposal-class-properties',
	'@babel/plugin-transform-runtime',
	// "@babel/plugin-transform-arrow-functions",
	// "@babel/plugin-proposal-optional-chaining",
];

module.exports = { presets, plugins };
