import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import nextConfig from 'eslint-config-next';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  js.configs.recommended,
  ...nextConfig,
  prettierPlugin,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^\\u0000', '^react', '^@?\\w'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ],
        },
      ],
      quotes: [2, 'single', { avoidEscape: true }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-duplicate-case': 'off',
      'react/react-in-jsx-scope': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/accessible-emoji': 'off',
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
];
