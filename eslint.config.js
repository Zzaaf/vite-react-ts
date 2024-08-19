import js from "@eslint/js";
import globals from 'globals';
import eslintReact from 'eslint-plugin-react';
import eslintReactRefresh from 'react-refresh';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintTypeScript from 'typescript-eslint';

export default eslintTypeScript.config(
    {
        plugins: {
            '@typescript-eslint': eslintTypeScript.plugin,
            react: eslintReact,
            'react-refresh': eslintReactRefresh,
            'react-hooks': eslintReactHooks,
        }
    },
    {
        ignores: ['node_modules', 'dist']
    },
    js.configs.recommended,
    ...eslintTypeScript.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.es2022
            },
            parserOptions: {
                project: ['tsconfig.json', 'tsconfig.node.json'],
                tsconfigRootDir: import.meta.dirname
            }
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        rules: {
            'prefer-const': 'error',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off'
        }
    }
);