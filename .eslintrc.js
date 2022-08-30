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
    "next/core-web-vitals",
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    "plugin:@typescript-eslint/strict",
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
    ]
  }
};
