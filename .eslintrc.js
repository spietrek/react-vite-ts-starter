module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'standard',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['jsx-a11y', 'react', '@typescript-eslint', 'prettier'],
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'prettier/prettier': [
      'warn',
      {
        htmlWhitespaceSensitivity: 'strict',
        semi: true,
        singleQuote: true,
      },
    ],
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-uses-react': 'off',
    'react/no-unescaped-entities': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'prefer-template': 'error',
    'import/no-cycle': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-debugger': 'warn',
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
  },
}
