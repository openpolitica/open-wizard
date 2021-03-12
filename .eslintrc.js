module.exports = {
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': ['warn'],
    'no-unused-vars': ['error'],
    'import/newline-after-import': ['warn', { count: 1 }],
    'import/no-unused-modules': ['warn'],
    'react-hooks/rules-of-hooks': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': ['warn'],
    'react/display-name': ['warn'],
    'react/jsx-no-target-blank': ['warn'],
  },
};
