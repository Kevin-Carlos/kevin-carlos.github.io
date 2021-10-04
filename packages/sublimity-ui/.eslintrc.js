module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',

    // This makes eslint play nice with prettier and prettier is run
    // through eslint
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    'spaced-comment': ['warn', 'always'],
    'no-console': 'warn',
  },
};
