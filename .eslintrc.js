module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
    "es2021": true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    "plugin:@typescript-eslint/strict",
    "next/core-web-vitals",
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
    "prettier"
  ],
  root: true,
  rules: {
    "react/function-component-definition": [
      1,
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "import/prefer-default-export": 0,
    "jsx-a11y/anchor-is-valid": 0,
  }
};
