import js from '@eslint/js'//built in. no idea
import globals from 'globals'//definitions for browser/node
import reactHooks from 'eslint-plugin-react-hooks'//check react rules
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'//define eslint config

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],//only use for js/jsx files
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {//language options
      ecmaVersion: 2020,//es2020 syntax support
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',//
      },
    },
    rules: {//Show an error if variables are defined but not used
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
