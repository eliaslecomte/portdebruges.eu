module.exports = {
  root: true, // Make sure eslint picks up the config at the root of the directory
  extends: [
    'next',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^\\u0000', '^react', '^@?\\w'], // Packages. `react` related packages come first.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // relative imports
        ],
      },
    ],
    quotes: [2, 'single', { avoidEscape: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/accessible-emoji': 'off',
  },
};
