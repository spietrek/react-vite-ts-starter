const path = require('path')

module.exports = {
  prefix: 'tw-',
  content: [path.join(__dirname, './src/**/*.(js|jsx|ts|tsx)')],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 2px 16px 0 rgb(0 0 0 / 50%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['light'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
