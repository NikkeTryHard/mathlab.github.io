module.exports = [
  {
    ignores: ['node_modules/**', '_site/**', '.trae/**']
  },
  {
    files: ['src/assets/*.js', 'src/_includes/plugins/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        window: 'readonly',
        document: 'readonly',
        MathJax: 'readonly'
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    rules: {
      'no-unused-vars': ['warn', { args: 'none' }],
      'eqeqeq': 'warn',
      'curly': 'warn'
    }
  }
];