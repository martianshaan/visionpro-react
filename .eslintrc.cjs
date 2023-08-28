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
  settings: {
    react: { version: '18.2' },
    settings: {
      // This uses the default `vite.config.js` file and the Vite configuration is an object.
      'import/resolver': 'vite',
    },
  },
  rules: {
    'react-refresh/only-export-components': 'warn',
    'linebreak-style': ['error', 'unix'],
  },
};
