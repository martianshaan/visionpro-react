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
    {
      files: ['contextIndex.js'],
      rules: {
        'import/no-unresolved': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'import',
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
    'import/no-unresolved': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
