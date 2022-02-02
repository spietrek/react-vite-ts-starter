module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard-with-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['jsx-a11y', 'react', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-use-before-define': 'error',
    'import/extensions': 'warn',
    'import/no-cycle': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/no-unresolved': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/rule-name': 2,
    'jsx-quotes': ['error', 'prefer-double'],
    'no-debugger': 'warn',
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'warn',
    'prefer-template': 'error',
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
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-uses-react': 'off',
    'react/no-unescaped-entities': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
