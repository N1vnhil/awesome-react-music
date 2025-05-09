module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:json/recommended',
    'plugin:markdown/recommended',
    'plugin:css/recommended',
    'prettier' // 更改这里，只使用 'prettier' 而不是 'plugin:prettier/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'json',
    'markdown',
    'css',
    'prettier' // 确保这个存在
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // 明确设置 prettier 规则
    'prettier/prettier': 'error'
  },
  overrides: [
    {
      files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'],
      globals: {
        ...require('globals').browser,
        ...require('globals').node
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
}
