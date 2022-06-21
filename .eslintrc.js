module.exports = {
	root: true,
	extends: ['plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'import'],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},
	settings: {
		'import/ignore': ['react'],
	},
	rules: {
		'react/no-danger': 0,
		'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
		quotes: ['error', 'single', { avoidEscape: true }],
		semi: ['error', 'always'],
		'import/no-unresolved': [0, { caseSensitive: false }],
		'import/no-named-as-default': 0,
		'no-console': [
			'error',
			{
				allow: ['warn', 'error'],
			},
		],
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
				'newlines-between': 'always-and-inside-groups',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
	},
};
