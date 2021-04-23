const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
      content: [
        './src/**/*.{html,ts,css,scss,sass,less,styl}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    rules: [{
      test: /\.scss$/,
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        syntax: 'postcss-scss',
        plugins: () => [
            require('postcss-import'),
            require('autoprefixer'),
        ]
    }
    }],
    plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms'),require('@tailwindcss/line-clamp'),require('@tailwindcss/typography'), require('postcss-import'),require('autoprefixer')],
};
