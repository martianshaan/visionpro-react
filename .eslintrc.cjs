module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react-refresh',
    'react',
    'react-hooks',
  ],
  settings: { react: { version: '18.2' } },
  rules: {
    'react-refresh/only-export-components': 'warn',
    'linebreak-style': ['error', 'unix'],
  },
};
