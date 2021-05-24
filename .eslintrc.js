module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier', '@typescript-eslint', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', 'jsx', 'tsx']
      }
    ],
    // HoCs specifically do not have display names. Safe to ignore.
    'react/display-name': 0,
    'prettier/prettier': 'error',
    'max-len': 0,
    // Ignore because nextjs <Link> does not require href
    'jsx-a11y/anchor-is-valid': 0,
    // typescript handles prop types
    'react/prop-types': 0,
    'no-console': ['error',{ allow: ["warn", "error", "debug"] }],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/ban-ts-comment': 'warn',
    // this is helpful but handing off to TS compiler. very noisy.
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/restrict-template-expressions': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-prototype-builtins': 0,
  },
  overrides: [],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        directory: '.'
      }
    },
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true
  }
};
