module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },

  extends: ['@nuxtjs/eslint-config-typescript', 'airbnb-base', 'prettier'],

  plugins: [],

  rules: {
    'linebreak-style': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: '*' },
    ],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',

    'no-param-reassign': 'off',
  },
};
