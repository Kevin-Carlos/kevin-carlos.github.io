module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    projects: ['./tsconfig.json', './packages/*/tsconfig.json'],
  },
  rules: {
    'spaced-comment': ['warn', 'always'],
    'no-console': 'warn',
  },
  ignorePatterns: ['remix.config.js'],
};
