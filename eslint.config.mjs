import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        plugins: { js },
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
    },
    pluginReact.configs.flat.recommended,
    eslintConfigPrettier,
    eslintPluginPrettierRecommended,
    reactHooks.configs['recommended-latest'],
    {
        files: ['**/*.{js,jsx}'],
        extends: [importPlugin.flatConfigs['react']],
        rules: {
            'import/order': [
                'error',
                {
                    'newlines-between': 'always',
                    groups: [
                        ['builtin', 'external'],
                        ['internal', 'parent', 'sibling', 'index'],
                    ],
                    pathGroups: [
                        {
                            pattern: 'react',
                            group: 'external',
                            position: 'before',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['react'],
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],
        },
    },
    {
        rules: {
            semi: ['error', 'always'],
            'linebreak-style': ['error', 'unix'],
            'react/prop-types': ['off'],
            'prettier/prettier': 'error',
            'no-console': 'warn',
            'react/display-name': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.json'],
                    moduleDirectory: ['node_modules'],
                },
            },
        },
    },
]);
