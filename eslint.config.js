// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.{ts,js,vue}'], // files to lint
  ignores: ['node_modules/**', 'dist/**', 'build/**'], // <-- correct way to ignore files
  languageOptions: {
    ecmaVersion: 'latest',
    globals: {
      process: 'readonly',
    },
  },
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn', // or "error"
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': 'error',
    'prefer-template': 'error',

    'space-in-brackets': 0,

    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          'emits',
          ['props', 'propsData'],
          'data',
          'computed',
          'watch',
          'methods',
          ['components', 'directives', 'filters'],
          'created',
          'mounted',
          'unmounted',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
})
