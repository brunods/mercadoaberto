import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import { Primary } from '@storybook/blocks';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
        './resources/js/**/*.stories.ts',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                inter: ['Inter', ...defaultTheme.fontFamily.sans],
                epilogue: ['Epilogue', ...defaultTheme.fontFamily.sans],
                roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                primary: '#516AD2',
                secondary: '#0041A1',
                gray: {
                    50: '#F3F3F3',
                    100: '#DDD',
                    200: '#C9C6C6',
                    500: '#868686',
                    300: '#B0B0B0',
                    600: '#767171',
                    800: '#4B4B4B',
                    900: '#3B3838',
                },
            }
        },
    },

    plugins: [forms],
};
