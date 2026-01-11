module.exports = {
	ignoreFiles: ['**/node_modules/**', '**/dist/**'],
	extends: [
		'stylelint-config-standard',
		'stylelint-config-recommended-less',
		'stylelint-config-recess-order',
	],
	plugins: ['stylelint-order', 'stylelint-less'],
	overrides: [
		{
			files: ['**/*.less'],
			customSyntax: 'postcss-less-fix',
			rules: {
				'declaration-property-value-no-unknown': null,
			},
		},
	],
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'apply',
					'layer',
					'theme',
					'utility',
					'variants',
					'responsive',
					'screen',
				],
			},
		],
		'import-notation': 'string',
	},
}
